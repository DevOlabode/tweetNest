
// GET /tweets- list all tweets
// POST /tweets- create new tweets
// GET /tweets/:id - get a tweet (using ID)
// PATCH /tweets/:id - update a tweet
// DELETE /tweets/:id - delete a tweet

const express = require('express');
const app = express();
const path = require('path');
const { v4 : uuid} = require('uuid')
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));

let tweets = [
    {
        username: `Didi`,
        tweet : `Why do I open the fridge 10 times like something new is gonna appear?? It's a fridge, not a vending machine with updates.`,
        hashtags : `#funny  #relatable`,
        id : uuid(),
    },
    {
        username: `SammyFrosh`,
        tweet : `You don’t have to have it all figured out. Just take one small step today. Progress > perfection.`,
        hashtags :  `#motivation  #inspiring`,
        id : uuid(),
    },
    {
        username: `DevOlabode`,
        tweet : `Me: spends 4 hours automating a 5-minute task
Also me: victory dance because now it’s automated forever`,
        hashtags :  `#tech  #nerdy`,
        id : uuid(),
    },
    {
        username: `Skyler`,
        tweet : `Ever notice how coffee at home never hits the same as overpriced coffee someone hands you through a window?`,
        hashtags :  `#observational  #real-life`,
        id : uuid(),
    },
    {
        username: `Todd`,
        tweet : `Midnight thoughts hit different.
Not quite dreams, not quite reality—just quiet truths with no one around to argue.`,
        hashtags :  `#poetic  #deep`,
        id : uuid(),
    },   
];

app.get('/', (req, res)=>{
    res.send('THE HOMEPAGE !!')
});

app.get('/tweets', (req, res)=>{
    res.render('tweet/index', { tweets })
});

app.get('/tweets/new', (req, res)=>{
    res.render('tweet/new');
});

app.post('/tweets', (req, res)=>{
    const {username, tweet, hashtags} = req.body;
    tweets.push({username, tweet, hashtags, id : uuid() });
    res.redirect('/tweets')
});

app.get('/tweets/:id', (req, res)=>{
    const { id } = req.params;
    
   const fTweet =  tweets.find(t => t.id === id);
   res.render('tweet/show', { fTweet })
});

app.get('/tweets/:id/edit', (req, res)=>{
    const { id } = req.params;
    
    const fTweet =  tweets.find(t => t.id === id);
    res.render('tweet/update', {fTweet})
});

app.patch('/tweets/:id', (req, res)=>{
    const { id } = req.params;
    const newTweet = req.body.tweetEdit;
    const newHashtags = req.body.editHashtags;

    const fTweet =  tweets.find(t => t.id === id);
    fTweet.tweet = newTweet;

    fTweet.hashtags = newHashtags;

    res.redirect('/tweets')
});

app.delete('/tweets/:id', (req, res)=>{
    const { id } = req.params;

   tweets =  tweets.filter(c => c.id !== id);
   res.redirect('/tweets');
})

app.listen('3000', ()=>{
    console.log('Listening on port 3000')
});
