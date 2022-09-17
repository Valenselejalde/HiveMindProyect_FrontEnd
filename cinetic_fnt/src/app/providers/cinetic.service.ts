import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class CineticService {
    salas: any;
    form_sala = this.frmB.group({
        id: [''],
        nombre: ['', Validators.required],
        ciudad: ['', Validators.required]
    });
    ver_formulario: boolean = false;

    constructor(private api: ApiService, private frmB: FormBuilder) { }

    listar() {
        this.api.get('sala').subscribe(data => {
            if (data != undefined) {
                this.salas = data
            }
        })
    }

    crear() {
        this.api.add('sala', this.form_sala.value).subscribe(data => {
            if (data != undefined) {
                this.ver_formulario = false;
                this.form_sala.reset();
                this.listar()
            }
        })
    }

    crear_actualizar() {
        if (this.form_sala.value['id']) {
            this.actualizar();
        }
        else {
            this.crear();
        }
    }

    actualizar() {
        this.api.update('sala', this.form_sala.value['id'], this.form_sala.value).subscribe(data => {
            if (data != undefined) {
                this.ver_formulario = false;
                this.form_sala.reset();
                this.listar()
            }
        })
    }

    llenar_form(sala: any) {
        this.form_sala.patchValue({
            id: sala.id,
            nombre: sala.nombre,
            ciudad: sala.ciudad
        })
    }
}