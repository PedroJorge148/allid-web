import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'

interface failedRequestQueueProps {
  onSuccess: (token: string) => void
  onFailure: (err: AxiosError) => void
}

let cookies = parseCookies()
let isRefreshing = false
let failedRequestQueue: failedRequestQueueProps[] = []

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies['@allid.token']}`,
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError<{ code: string }>) => {
    if (error.response?.status === 401) {
      if (error.response.data?.code === 'token.expired') {
        cookies = parseCookies()

        const { '@allid.refreshToken': refreshToken } = cookies
        const originalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true

          api
            .post('/refresh', {
              refreshToken,
            })
            .then((response) => {
              const { token } = response.data

              setCookie(undefined, '@allid.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 dias
                path: '/',
              })

              setCookie(
                undefined,
                '@allid.refreshToken',
                response.data.refreshToken,
                {
                  maxAge: 60 * 60 * 24 * 30, // 30 dias
                  path: '/',
                },
              )

              api.defaults.headers.Authorization = `Bearer ${token}`

              failedRequestQueue.forEach((request) => request.onSuccess(token))
              failedRequestQueue = []
            })
            .catch((err) => {
              failedRequestQueue.forEach((request) => request.onFailure(err))
              failedRequestQueue = []
            })
            .finally(() => {
              isRefreshing = false
            })
        }

        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSuccess: (token: string) => {
              if (originalConfig) {
                originalConfig.headers.Authorization = `Bearer ${token}`

                resolve(api(originalConfig))
              }
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            },
          })
        })
      } else {
        // console.log('deslogar')
      }
    }

    return error
  },
)
