import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class CineticPeliculaService {
    lista: any;
    formulario = this.frmB.group({
        id: [''],
        nombre: ['', Validators.required],
        genero: ['', Validators.required],
        idioma: ['', Validators.required]
    });
    ver_formulario: boolean = false;
    ver_formulario_borrar: boolean = false;

    constructor(private api: ApiService, private frmB: FormBuilder) { }

    listar() {
        this.api.get('pelicula').subscribe(data => {
            if (data != undefined) {
                this.lista = data
            }
        })
    }

    crear() {
        this.api.add('pelicula', this.formulario.value).subscribe(data => {
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
        this.api.update('pelicula', this.formulario.value['id'], this.formulario.value).subscribe(data => {
            if (data != undefined) {
                this.ver_formulario = false;
                this.formulario.reset();
                this.listar()
            }
        })
    }

    eliminar() {
        this.api.delete('pelicula', this.formulario.value['id']).subscribe(data => {
            this.ver_formulario_borrar = false;
            this.formulario.reset();
            this.listar()
        })
    }

    llenar_formulario(pelicula: any) {
        this.formulario.patchValue({
            id: pelicula.id,
            nombre: pelicula.nombre,
            genero: pelicula.genero,
            idioma: pelicula.idioma
        })
    }
}