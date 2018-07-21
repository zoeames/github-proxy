#!/usr/bin/env node
"use strict";

//Setting Up App
const express = require('express');
const axios = require('axios');
const app = express()
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get_github_user/:username', (req, res) => {
  console.log('req', );
  const username = req.params.username;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/todays_commits/:username', (req, res) => {
  console.log('req', );
  const username = req.params.username;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  axios.get(`https://api.github.com/users/${username}/events?client_id=${clientId}&client_secret=${clientSecret}`)
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});

//// You know, like, listen on the port or something something darkside
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))