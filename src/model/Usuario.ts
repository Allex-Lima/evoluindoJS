import { v4 as uuidv4 } from 'uuid';

export class Usuario {
    id?: string;
    nome: string;
    email: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

}