import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Box,
  TextField,
  Typography,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import styles from './SignIn.module.css'

const loginValidationSchema = zod.object({
  email: zod
    .string()
    .min(1, 'Informe o email.')
    .email({ message: 'Endereço de email inválido.' }),
  password: zod.string().min(1, 'Informe a senha'),
})

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
  })

  // type LoginData = zod.infer<typeof loginValidationSchema>

  function handleLoginSubmit(data: any) {
    console.log(data)
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Paper
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          boxShadow: '5px 5px 10px #ccc',
          borderRadius: 3,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar | All ID
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            autoComplete="email"
            required
            autoFocus
            {...register('email')}
            error={!!errors.email}
            helperText={errors?.email ? errors.email.message : null}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Manter login"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 1, textTransform: 'none' }}
          >
            Entrar
          </Button>
        </Box>
        <Typography sx={{ mt: 1, mb: 2 }}>
          <NavLink to="#">Esqueceu a senha?</NavLink>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Box component="div" className={styles.or}>
            <span>ou</span>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            sx={{ mb: 2, textTransform: 'none' }}
          >
            <GoogleIcon sx={{ marginRight: 1 }} />
            Entrar com Google
          </Button>
        </Box>
      </Paper>
      <Typography>
        Ainda não tem uma conta?{' '}
        <NavLink to="/signup">Cadastre-se</NavLink>
      </Typography>
    </Container>
  )
}
