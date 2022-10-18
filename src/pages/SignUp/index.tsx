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

// import { NavLink } from 'react-router-dom'

import styles from './SignUp.module.css'

export function SignUp() {
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
        <Box component="form" /* onSubmit={} */ noValidate>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Nome"
            name="name"
            autoComplete="name"
            required
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            required
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
