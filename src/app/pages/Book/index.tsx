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

import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';

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

  const title1 = document.getElementById('title1') as HTMLInputElement;
  const author1 = document.getElementById('author1') as HTMLInputElement;
  const description1 = document.getElementById(
    'description1',
  ) as HTMLInputElement;
  const isbn1 = document.getElementById('isbn1') as HTMLInputElement;

  const title2 = document.getElementById('title2') as HTMLInputElement;
  const author2 = document.getElementById('author2') as HTMLInputElement;
  const description2 = document.getElementById(
    'description2',
  ) as HTMLInputElement;
  const isbn2 = document.getElementById('isbn2') as HTMLInputElement;

  const title3 = document.getElementById('title3') as HTMLInputElement;
  const author3 = document.getElementById('author3') as HTMLInputElement;
  const description3 = document.getElementById(
    'description3',
  ) as HTMLInputElement;
  const isbn3 = document.getElementById('isbn3') as HTMLInputElement;

  const title4 = document.getElementById('title4') as HTMLInputElement;
  const author4 = document.getElementById('author4') as HTMLInputElement;
  const description4 = document.getElementById(
    'description4',
  ) as HTMLInputElement;
  const isbn4 = document.getElementById('isbn4') as HTMLInputElement;

  const title5 = document.getElementById('title5') as HTMLInputElement;
  const author5 = document.getElementById('author5') as HTMLInputElement;
  const description5 = document.getElementById(
    'description5',
  ) as HTMLInputElement;
  const isbn5 = document.getElementById('isbn5') as HTMLInputElement;

  var allGood = 0;

  fetch('http://localhost:8000/book/create/', {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      title: title1.value,
      author: author1.value,
      description: description1.value,
      isbn: isbn1.value,
    }),
  })
    .then(resp => {
      resp.json();
      if (resp.status === 200 || resp.status === 201) {
        allGood += 1;
      }
    })
    .catch(error => console.log('error ->', error));

  fetch('http://localhost:8000/book/create/', {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      title: title2.value,
      author: author2.value,
      description: description2.value,
      isbn: isbn2.value,
    }),
  })
    .then(resp => {
      resp.json();
      if (resp.status === 200 || resp.status === 201) {
        allGood += 1;
      }
    })
    .catch(error => console.log('error ->', error));

  fetch('http://localhost:8000/book/create/', {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      title: title3.value,
      author: author3.value,
      description: description3.value,
      isbn: isbn3.value,
    }),
  })
    .then(resp => {
      resp.json();
      if (resp.status === 200 || resp.status === 201) {
        allGood += 1;
      }
    })
    .catch(error => console.log('error ->', error));

  fetch('http://localhost:8000/book/create/', {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      title: title4.value,
      author: author4.value,
      description: description4.value,
      isbn: isbn4.value,
    }),
  })
    .then(resp => {
      resp.json();
      if (resp.status === 200 || resp.status === 201) {
        allGood += 1;
      }
    })
    .catch(error => console.log('error ->', error));

  fetch('http://localhost:8000/book/create/', {
    method: 'POST',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      title: title5.value,
      author: author5.value,
      description: description5.value,
      isbn: isbn5.value,
    }),
  })
    .then(resp => {
      resp.json();
      if (resp.status === 200 || resp.status === 201) {
        allGood += 1;
      }
    })
    .catch(error => console.log('error ->', error));

  if (allGood === 5) {
    window.location.href = '/';
  } else {
    alert('Try again! Something went wrong!');
  }
}

export function Book() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalLibraryOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add 5 books to your account
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title1"
                label="Title"
                name="title"
                autoComplete="title"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="author"
                label="Author"
                id="author1"
                autoComplete="author"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                id="description1"
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="isbn"
                label="ISBN"
                id="isbn1"
                autoComplete="isbn"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title2"
                label="Title"
                name="title"
                autoComplete="title"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="author"
                label="Author"
                id="author2"
                autoComplete="author"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                id="description2"
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="isbn"
                label="ISBN"
                id="isbn2"
                autoComplete="isbn"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title3"
                label="Title"
                name="title"
                autoComplete="title"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="author"
                label="Author"
                id="author3"
                autoComplete="author"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                id="description3"
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="isbn"
                label="ISBN"
                id="isbn3"
                autoComplete="isbn"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title4"
                label="Title"
                name="title"
                autoComplete="title"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="author"
                label="Author"
                id="author4"
                autoComplete="author"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                id="description4"
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="isbn"
                label="ISBN"
                id="isbn4"
                autoComplete="isbn"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title5"
                label="Title"
                name="title"
                autoComplete="title"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="author"
                label="Author"
                id="author5"
                autoComplete="author"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                id="description5"
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="isbn"
                label="ISBN"
                id="isbn5"
                autoComplete="isbn"
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
            Finish Registration
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
