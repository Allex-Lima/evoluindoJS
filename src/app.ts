import express from "express";
import { usuarioRouter } from "./routers/usuarioRouter";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/usuario', usuarioRouter);

app.listen(port, () => {
    console.log(`App run on port ${port}`);
})