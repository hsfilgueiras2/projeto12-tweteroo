import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors());
const users = [];
const tweets = [];

app.post('/sign-up', (req,res) => {

    
    users.push(req.body)
    res.sendStatus(200)
})

app.post('/tweets', (req,res) => {

    tweets.push(req.body)
    res.sendStatus(200)
})

app.get('/tweets',(req,res)=>{
const sendTweets = []
for(let count =tweets.length - 10;count<tweets.length; count++){
    if (count >= 0)
    {
        let avatar = users.find(obj => obj.username == tweets[count].username).avatar
        sendTweets.push(
            {
                username: tweets[count].username,
                avatar: avatar,
                tweet:tweets[count].tweet,
            }
        )
    }
}
res.send(sendTweets)

})

app.listen(5000, () => console.log("App running in port: 5000"));