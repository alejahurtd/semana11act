export class Titulo{
    constructor(texto) {
        this.texto = texto
    }

    render() {
        const elementoP = document.createElement('p');
        elementoP.textContent = this.texto; 
        return elementoP; 
    }

}