import { Router } from 'express';
//import {v4 as uuidv4} from 'uuid'
import { UsuarioRepository } from '../repository/UsuarioRepository';

export const usuarioRouter = Router();

const novoUsuario = new UsuarioRepository();

usuarioRouter.post('/', (req, res) => {
    const { nome, email } = req.body;
    
    novoUsuario.criar({ email, nome });

    return res.status(201).json({ message: 'Usuário criado com sucesso.' });
});

usuarioRouter.get('/', (req, res) => {
    const listarTodosUsuarios = novoUsuario.listar();
    
    const listaVazia = novoUsuario.listaVazia();

    if (listaVazia) {
        return res.status(201).json({ message: 'Lista vazia' });
    }

    return res.status(201).json(listarTodosUsuarios);
});

usuarioRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    const listarUsuarioId = novoUsuario.listarUsuarioId(id);

    if (listarUsuarioId === undefined) {
        return res.status(401).json({ message: 'Usuário não encontrado.' });
    }

    return res.status(201).json(listarUsuarioId);
})