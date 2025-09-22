import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ControladorService } from '../servicios/controlador.service';
import { SnackBarService } from '../servicios/snack-bar.service';
import { WriteService } from '../servicios/write.service';
import { StatesEnum } from '../enums/states.enum';

@Component({
  selector: 'app-vista-carrito',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule, MatDividerModule],
  template: `
    <main class="box-responsive">
      <section>
        <h1>Mi Carrito de Compras</h1>
        @if (controladorService.totalItems() > 0) {
          <mat-list>
            @for (item of controladorService.coleccion(); track item.id) {
              <mat-list-item>
                <img matListItemAvatar [src]="item.imageLink" [alt]="item.title">
                <h3 matListItemTitle>{{ item.title }}</h3>
                <p matListItemLine>{{ item.price | currency }}</p>
                <p matListItemLine>Cantidad: 1</p>
                <button mat-icon-button color="warn" (click)="eliminarItem(item.id)">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-list-item>
              <mat-divider></mat-divider>
            }
          </mat-list>
          <div class="resumen">
            <h3>Total: {{ controladorService.total() | currency }}</h3>
            <button mat-flat-button color="primary" (click)="guardarCarrito()">
              <mat-icon>save</mat-icon> Guardar Carrito
            </button>
            <button mat-flat-button color="accent" (click)="limpiarCarrito()">
              <mat-icon>clear</mat-icon> Limpiar Carrito
            </button>
          </div>
        } @empty {
          <p>El carrito está vacío.</p>
        }
      </section>
    </main>
  `,
  styleUrl: './vista-carrito.component.css'
})
export class VistaCarritoComponent {
  
  public readonly controladorService = inject(ControladorService);
  private readonly snackBarService = inject(SnackBarService);
  private readonly writeService = inject(WriteService);
  
  public readonly states = StatesEnum;

  // Métodos
  eliminarItem(id: string | number | undefined): void {    if (id) {      this.controladorService.eliminarItem(id);      this.snackBarService.mostrarMensaje('Producto eliminado del carrito.');    }  }
  async guardarCarrito(): Promise<void> {    const idUsuario = 'usuario123';    await this.controladorService.guardarColeccion('carritos', idUsuario);    if (this.controladorService.states() === StatesEnum.SUCCESS) {      this.snackBarService.mostrarMensaje('Carrito guardado exitosamente.');    } else {      this.snackBarService.mostrarMensaje('Error al guardar el carrito.');    }  }
  limpiarCarrito(): void {    this.controladorService.limpiarColeccion();    this.snackBarService.mostrarMensaje('Carrito limpiado.');  }



  
}
