import {
  Avatar,
  Button,
  Container,
  Paper,
  Box,
  TextField,
  Typography,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import styles from './SignUp.module.css'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const CadValidationSchema = zod.object({
  name: zod.string().min(10, 'Digite seu nome completo.'),
  email: zod
    .string()
    .min(1, 'Informe o email.')
    .email({ message: 'Endereço de email inválido.' }),
  password: zod.string().min(4, 'A senha precisa ter no mínimo 4 caracteres.'),
})

type CadData = zod.infer<typeof CadValidationSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadData>({
    resolver: zodResolver(CadValidationSchema),
  })

  function handleCadSubmit(data: CadData) {
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
        <Typography component="h1" variant="h5">
          Cadastrar | All ID
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleCadSubmit)}
          noValidate
        >
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Nome"
            autoComplete="name"
            required
            autoFocus
            {...register('name')}
            error={!!errors.name}
            helperText={errors?.name ? errors.name.message : ''}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            autoComplete="email"
            required
            {...register('email')}
            error={!!errors.email}
            helperText={errors?.email ? errors.email.message : ''}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            id="password"
            autoComplete="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors?.password ? errors.password.message : ''}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 3, textTransform: 'none' }}
          >
            Cadastrar
          </Button>
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
        </Box>
      </Paper>
    </Container>
  )
}
