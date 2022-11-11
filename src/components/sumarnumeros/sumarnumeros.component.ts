
import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    
    selector: "app-sumar-numero",
    templateUrl: "./sumarnumeros.component.html", 

})

export class SumarNumerosComponent{
    //DECLARAMOS LAS REFERENCIAS A CADA ELEMENTO
    //DEL FORMULARIO

    @ViewChild("cajanumero1") cajaNumero1!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2!: ElementRef;
    public suma!: number;

   
    sumarNumeros(): void{
        var num1 = this.cajaNumero1.nativeElement.value;
        var num2 = this.cajaNumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);


    }

}