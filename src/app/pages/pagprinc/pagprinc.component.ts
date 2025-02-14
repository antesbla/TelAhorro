import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagprinc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagprinc.component.html',
  styleUrl: './pagprinc.component.css',
})
export class PagprincComponent {
  constructor(private router: Router) {}

  iralogin() {
    this.router.navigate(['/login']);
  }
  
  iraregistro() {
    this.router.navigate(['/registro']);
  }
}
