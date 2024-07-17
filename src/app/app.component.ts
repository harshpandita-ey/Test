import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponentComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssessment';
}
