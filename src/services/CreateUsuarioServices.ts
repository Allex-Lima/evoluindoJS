import { IUsuariosRepository } from "../repository/IUsuariosRepository";

interface IRequest {
    nome: string;
    email: string;
}

export class CreateUsuarioServices {

    constructor(private usuarioRepository: IUsuariosRepository) { }
    
    execute({email, nome}: IRequest): void {
        const heUsuario = this.usuarioRepository.listarUsuarioId(nome);

        if (heUsuario) {
            throw new Error('Usuário já existe.');
        }

        this.usuarioRepository.criar({ email, nome });
    }
}