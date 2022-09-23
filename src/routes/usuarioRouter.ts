import { Router } from 'express';
import {v4 as uuidv4} from 'uuid'

export const usuarioRouter = Router();

const usuario = [];

usuarioRouter.post('/', (req, res) => {
    const { nome, email } = req.body;

    const usuarioOne = {
        id: uuidv4(),
        nome,
        email,
    };

    usuario.push(usuarioOne);

    return res.json(usuario);
});

usuarioRouter.get('/', (req, res) => {
    return res.json(usuario)
});