import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(201).json({ message: 'Hello World...' });
});

app.listen(port, () => {
    console.log(`App run on port ${port}`);
})