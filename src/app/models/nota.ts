export class Nota{
    _id?: number;
    titulo: string;
    contenido: string;
    

    constructor( titulo: string, contenido: string){
        this.titulo = titulo;
        this.contenido = contenido;
    }
}