const express = require('express');
const router = express.Router();
const Player = require('../models/playerModel');

// Add player
router.post('/', async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    const result = await newPlayer.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update player
router.put('/:id', async (req, res) => {
  try {
    const updatedPlayer = await Player.updateOne({_id: req.params.id}, req.body);
    res.send(updatedPlayer);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete player
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlayer = await Player.deleteOne({_id: req.params.id});
    res.send(deletedPlayer);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get players
router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.send(players);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get player with most touchdown passes
router.get('/most-touchdowns', async (req, res) => {
    try {
      const player = await Player.findOne().sort('-stats.touchdownsthrown');
      res.send(player);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Get player with most rushing yards
  router.get('/most-rushingyards', async (req, res) => {
    try {
      const player = await Player.findOne().sort('-stats.rushingyards');
      res.send(player);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Get player with least rushing yards
  router.get('/least-rushingyards', async (req, res) => {
    try {
      const player = await Player.findOne().sort('stats.rushingyards');
      res.send(player);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Get players sorted from most to fewest field goals made
  router.get('/sorted-fieldgoals', async (req, res) => {
    try {
      const players = await Player.find().sort('-stats.fieldgoalsmade');
      res.send(players);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Get player with the most number of sacks
  router.get('/most-sacks', async (req, res) => {
    try {
      const player = await Player.findOne().sort('-stats.sacks');
      res.send(player);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const players = await Player.find();
      console.log(players);  // Log the retrieved players
      res.send(players);
    } catch (err) {
      console.log(err);  // Log any error
      res.status(500).send(err);
    }
  });
  

module.exports = router;
