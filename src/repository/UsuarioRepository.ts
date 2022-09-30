import { Usuario } from '../model/Usuario';

interface ICriaUsuarioDTO {
    nome: string,
    email: string
}

export class UsuarioRepository {
    private usuarios: Usuario[];

    constructor() {
        this.usuarios = [];
    }

    criar({email, nome}: ICriaUsuarioDTO): void {
        const novoUsuario = new Usuario();

        Object.assign(novoUsuario, {
            nome,
            email,
        });

        this.usuarios.push(novoUsuario);
    }

    listar(): Usuario[] {
        return this.usuarios;
    }

    listaVazia() {
        return this.usuarios.length === 0;
    }

    listarUsuarioId(nome: string): Usuario | undefined {
        const idUsuario = this.usuarios.find((usuarioId) => usuarioId.nome === nome);
            
        return idUsuario;
    }
}