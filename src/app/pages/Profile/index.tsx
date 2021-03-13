import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  // FormControlLabel,
  // Checkbox,
  // Link,
  Grid,
  Box,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import { Copyright } from '../../components/Copyright/Loadable';
// import axiosInstance from '../AxiosApi';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function handleSubmit(event: { preventDefault: () => void }) {
  event.preventDefault();

  const country = document.getElementById('country') as HTMLInputElement;
  const city = document.getElementById('city') as HTMLInputElement;
  const address = document.getElementById('address') as HTMLInputElement;

  return fetch('http://localhost:8000/profile/create/', {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      country: country.value,
      city: city.value,
      address: address.value,
    }),
  })
    .then(resp => {
      resp.json();
      window.location.href = '/book/add';
      // if (resp.status === 200) {
      //   window.location.href = '/book/add';
      // }
    })
    .catch(error => console.log('error ->', error));
}

export function Profile() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutlineOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Set up profile
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="city"
                label="City"
                id="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                autoComplete="address"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Books
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
