const express = require('express');
const{OpenAI} = require('openai');
require('dotenv').config();

const app = express();
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL:"https://api.groq.com/openai/v1"
});
//Test route to ensure server is working 
app.get('/', (req, res) => {
   res.send('AI backend is running successfully!');
   });
//AI Intraction Point 
app.post('/ask',async(req,res)=>{
    try{
        const{message} = req.body;
        const response = await openai.chat.completions.create({
            model:'llama-3.1-8b-instant',
            messages:[ {role:'user',content:message}]
    } )
    res.json({response:response.choices[0].message.content});
    }catch(error){
        console.error('Error:',error);
        res.status(500).json({error:'An error occurred while processing your request.'});
    }
});
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
}); 