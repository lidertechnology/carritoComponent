import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ControladorService } from '../servicios/controlador.service';
import { SnackBarService } from '../servicios/snack-bar.service';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <article>
      <mat-card>
        <img mat-card-image [src]="conector.imageLink" [alt]="conector.title" loading="lazy">
        <mat-card-header>
          <mat-card-title>{{ conector.title }}</mat-card-title>
          <mat-card-subtitle>{{ conector.brand }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>{{ conector.description }}</p>
          <p>Precio: {{ conector.price | currency }}</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-flat-button color="primary" (click)="agregarAlCarrito(conector)">
            <mat-icon>shopping_cart</mat-icon> Añadir al Carrito
          </button>
        </mat-card-actions>
      </mat-card>
    </article>
  `,
})
export class ProductoComponent {
  @Input() conector!: ProductInterface;
  
  private readonly controladorService = inject(ControladorService); // Usa el servicio de Controlador para agregar productos al carrito
  private readonly snackBarService = inject(SnackBarService);  // Usa el servicio SnackBarService para notificar al usuario lo que ocurre.

  agregarAlCarrito(producto: Product): void {    this.controladorService.agregarItem(producto);    this.snackBarService.mostrarMensaje(' Producto añadido al carrito. ');  } // Al agregar el producto se lanza el mensaje de producto añadido al carrito
}
