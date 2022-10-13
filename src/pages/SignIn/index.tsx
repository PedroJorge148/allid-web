// import { Container } from '@mui/material'

import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

import { Box } from '@mui/system'
import { NavLink } from 'react-router-dom'

export function SignIn() {
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
        <Box component="form" /* onSubmit={} */ noValidate>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            required
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Manter login"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 1 }}
          >
            Entrar
          </Button>
          <Typography textAlign="right">
            <NavLink to="#">Esqueceu a senha?</NavLink>
          </Typography>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2 }}
        >
          <GoogleIcon />
          Entrar com Google
        </Button>
      </Paper>
      <Typography>
        Ainda não tem uma conta?{' '}
        <NavLink to="/signup">Cadastre-se</NavLink>
      </Typography>
    </Container>
  )
}
