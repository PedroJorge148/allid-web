import { Typography } from '@mui/material'

export function RegSocialMedia() {
  return (
    <div>
      <div className="flex flex-col w-[35%] m-auto mt-10">
        <Typography className="font-bold text-center">
          Cadastro de informações {'->'} Redes Sociais
        </Typography>
        <div className="flex w-full p-6 mb-4 bg-gray-400 rounded-lg border-b-2-cyan-500">
          <form className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="facebook" className="font-semibold">
                Facebook
              </label>
              <input
                type="text"
                id="facebook"
                name="facebook"
                placeholder="facebook.com/usuario123"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="instagram" className="font-semibold">
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder="instagram.com/usuario123"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="linkedin" className="font-semibold">
                LinkedIn
              </label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="linkedin.com/usuario123"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="youtube" className="font-semibold">
                Youtube
              </label>
              <input
                type="text"
                id="youtube"
                name="youtube"
                placeholder="youtube.com/@usuario123"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="tiktok" className="font-semibold">
                  TikTok
                </label>
                <input
                  type="text"
                  id="tiktok"
                  name="tiktok"
                  placeholder="tiktok.com/@usuario123"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="kwai" className="font-semibold">
                  Kwai
                </label>
                <input
                  type="text"
                  id="kwai"
                  name="kwai"
                  placeholder="@usuario123"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="twitter" className="font-semibold">
                  Twitter
                </label>
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="twitter.com/usuario123"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="twitch" className="font-semibold">
                  Twitch
                </label>
                <input
                  type="text"
                  id="twitch"
                  name="twitch"
                  placeholder="twitter.com/usuario123"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                />
              </div>
            </div>
            <footer className="flex justify-end mt-4">
              <button
                type="submit"
                className="flex items-center gap-3 bg-blue-500 px-5 h-12 rounded-md font-semibold text-white"
              >
                Cadastrar
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}
