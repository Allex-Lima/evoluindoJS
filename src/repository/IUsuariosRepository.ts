import { Usuario } from '../model/Usuario';

export interface ICriaUsuarioDTO {
    email: string;
    nome: string;
}

export interface IUsuariosRepository {
    criar({ email, nome }: ICriaUsuarioDTO): void;
    listar(): Usuario[];
    listaVazia(): boolean;
    listarUsuarioId(nome: string): Usuario | undefined;
}