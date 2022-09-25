import { Router } from 'express';
//import {v4 as uuidv4} from 'uuid'
import { UsuarioRepository } from '../repository/UsuarioRepository';

export const usuarioRouter = Router();

const usuario = [];
const novoUsuario = new UsuarioRepository();

usuarioRouter.post('/', (req, res) => {
    const { nome, email } = req.body;
    
    novoUsuario.criar({ email, nome });

    return res.status(201).json({ message: 'Usuário criado com sucesso.' });
});

usuarioRouter.get('/', (req, res) => {
    return res.json(novoUsuario)
});