import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icono-contador',
  standalone: true,
  imports: [MatIconModule, MatBadgeModule, MatButtonModule],
  template: `  
    <button  mat-icon-button  [matBadge]="cantidad"  matBadgeColor="accent"  [matBadgeHidden]="cantidad === 0"  (click)="navegar()">  
      <mat-icon>{{ icono }}</mat-icon>   
    </button>  `,
})
export class IconoContadorComponent {
  @Input() icono!: string;
  @Input() ruta!: string[];
  @Input() cantidad: number = 0;

  private readonly router = inject(Router);

  navegar(): void {   this.router.navigate(this.ruta);  }
}
