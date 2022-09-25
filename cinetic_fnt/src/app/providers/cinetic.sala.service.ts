import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class CineticSalaService {
    lista: any;
    formulario = this.frmB.group({
        id: [''],
        nombre: ['', Validators.required],
        ciudad: ['', Validators.required]
    });
    ver_formulario: boolean = false;
    ver_formulario_borrar: boolean = false;
    ver_lista_sillas: boolean = false;

    lista_ciudad = [{ciudad: 'Medellín'}, {ciudad: 'Bogotá'}]

    constructor(private api: ApiService, private frmB: FormBuilder) { }

    listar() {
        this.api.get('sala').subscribe(data => {
            if (data != undefined) {
                this.lista = data
            }
        })
    }

    crear() {
        this.api.add('sala', this.formulario.value).subscribe(data => {
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
        this.api.update('sala', this.formulario.value['id'], this.formulario.value).subscribe(data => {
            if (data != undefined) {
                this.ver_formulario = false;
                this.formulario.reset();
                this.listar()
            }
        })
    }

    eliminar() {
        this.api.delete('sala', this.formulario.value['id']).subscribe(data => {
            this.ver_formulario_borrar = false;
            this.formulario.reset();
            this.listar()
        })
    }

    llenar_formulario(sala: any) {
        this.formulario.patchValue({
            id: sala.id,
            nombre: sala.nombre,
            ciudad: sala.ciudad
        })
    }
}