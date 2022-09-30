import { Router } from 'express';
//import {v4 as uuidv4} from 'uuid'
import { UsuarioRepository } from '../repository/UsuarioRepository';
import { CreateUsuarioServices } from '../services/CreateUsuarioServices';

export const usuarioRouter = Router();
const usuarioRepository = new UsuarioRepository();

usuarioRouter.post('/', (req, res) => {
    const { nome, email } = req.body;
    
    const createUsuarioServices = new CreateUsuarioServices(usuarioRepository);

    createUsuarioServices.execute({ email, nome });

    return res.status(201).json({ message: 'Usuário criado com sucesso.' });
});

usuarioRouter.get('/', (req, res) => {
    const listarTodosUsuarios = usuarioRepository.listar();
    
    const listaVazia = usuarioRepository.listaVazia();

    if (listaVazia) {
        return res.status(201).json({ message: 'Lista vazia' });
    }

    return res.status(201).json(listarTodosUsuarios);
});

usuarioRouter.get('/:nome', (req, res) => {
    const { nome } = req.params;

    const listarUsuarioId = usuarioRepository.listarUsuarioId(nome);

    if (listarUsuarioId === undefined) {
        return res.status(401).json({ message: 'Usuário não encontrado.' });
    }

    return res.status(201).json(listarUsuarioId);
})