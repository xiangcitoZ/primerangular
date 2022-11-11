import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    //DEBEMOS INDICAR UN SELECTOR QUE SERA EL NOMBRE
    //DE ETIQUETA PARA LAS PAGINAS DEL PROYECTO
    selector: "primer-component",
    //EL TEMPLATE DE UN COMPONENT PUEDE SER EXTERNO
    //O INTERNO
    templateUrl: "./primer.component.html", 

    styleUrls: ["./primer.component.css"]
})

//TODO COMPONENT DEBE SER EXPORTADO COMO CLASE
//DICHO NOMBRE DE CLASE SERA EL DECLARADO POSTERIORMENTE
//DENTRO DE MODULE
export class PrimerComponent{
    //VAMOS A CREAR UNA SERIE DE PROPIEDADES
    public titulo: string;
    public descripcion: string;
    public anyo: number;

    constructor(){
        this.titulo = "Viernes de Angular";
        this.descripcion = "Aprendiendo Angular a tope!!!";
        this.anyo = 2022;
    }

}