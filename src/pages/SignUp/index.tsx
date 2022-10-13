// import { Container } from '@mui/material'

import {
  Avatar,
  Button,
  Container,
  Paper,
  Box,
  TextField,
  Typography,
} from '@mui/material'

// import { NavLink } from 'react-router-dom'

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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 1 }}
          >
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
