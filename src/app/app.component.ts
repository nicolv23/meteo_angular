import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  // Assurez-vous d'inclure RouterOutlet et CommonModule dans les imports de votre composant
  imports: [RouterOutlet, CommonModule]
})
export class AppComponent {
  title = 'AppMeteo';
}
