import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class CineticSillaService {
    lista: any;
    formulario = this.frmB.group({
        id: [''],
        sala_id: ['', Validators.required],
        fila: ['', Validators.required],
        columna: ['', Validators.required],
        tipo: ['', Validators.required],
        precio: ['', Validators.required]
    });
    ver_formulario: boolean = false;
    ver_formulario_borrar: boolean = false;

    lista_sala: any;

    constructor(private api: ApiService, private frmB: FormBuilder) { }

    listar() {
        this.api.get('silla').subscribe(data => {
            if (data != undefined) {
                this.lista = data
                console.log(data)
            }
        })

        this.api.get('sala').subscribe(data => {
            if (data != undefined) {
                this.lista_sala = data
                this.lista_sala.forEach((value: { nombre_ciudad: any; nombre: any; ciudad: any; }) => {
                    value.nombre_ciudad = value.nombre + ' - ' + value.ciudad
                }); 
            }
        })
    }

    crear() {
        this.api.add('silla', this.formulario.value).subscribe(data => {
            if (data != undefined) {
                this.ver_formulario = false;
                this.formulario.reset();
                this.listar()
            }
        })
    }

    crear_actualizar() {
        if (this.formulario.value['id']) {
            this.actualizar();
        }
        else {
            this.crear();
        }
    }

    actualizar() {
        this.api.update('silla', this.formulario.value['id'], this.formulario.value).subscribe(data => {
            if (data != undefined) {
                this.ver_formulario = false;
                this.formulario.reset();
                this.listar()
            }
        })
    }

    eliminar() {
        this.api.delete('silla', this.formulario.value['id']).subscribe(data => {
            this.ver_formulario_borrar = false;
            this.formulario.reset();
            this.listar()
        })
    }

    llenar_formulario(silla: any) {
        this.formulario.patchValue({
            id: silla.id,
            sala_id: silla.sala.id,
            fila: silla.fila,
            columna: silla.columna,
            tipo: silla.tipo,
            precio: silla.precio
        })
    }
}