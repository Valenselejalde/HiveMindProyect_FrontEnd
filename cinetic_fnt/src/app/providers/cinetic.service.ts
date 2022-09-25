import { Injectable } from "@angular/core";
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class CineticService {
    items: MenuItem[] = [
        { label: 'Salas', icon: PrimeIcons.ANGLE_DOUBLE_DOWN, command: (event) => { this.router.navigate(['/sala']) } },
        { label: 'Películas', icon: PrimeIcons.ANGLE_DOUBLE_DOWN, command: (event) => { this.router.navigate(['/pelicula']) } },
        { label: 'Sillas', icon: PrimeIcons.ANGLE_DOUBLE_DOWN, command: (event) => { this.router.navigate(['/silla']) } }
    ];

    constructor(private router: Router) { }
}