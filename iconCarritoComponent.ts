import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { ControladorService } from '../servicios/controlador.service';

@Component({
  selector: 'app-resumen-carrito',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule],
  template: `
   
        <button mat-icon-button [matBadge]="controladorService.totalItems()" matBadgeColor="accent">
          <mat-icon>shopping_cart</mat-icon>
        </button>
  `,
})
export class ResumenCarritoComponent {
  public readonly controladorService = inject(ControladorService);
}
