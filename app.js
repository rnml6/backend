import express from "express";

const app = express();

const port = 3002;

app.use(express.json());

try {
    app.listen(port, () =>{
        console.log('Listening to port 3001...')
    });
} catch (error) {
    console.log(error);
}

app.get('/ronmel', async(request, response) => {
    response.status(200).json({message: "Ronmel Na Andaya"})
});