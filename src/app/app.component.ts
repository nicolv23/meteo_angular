import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { RouterOutlet } from '@angular/router';
import { MeteoService } from './services/meteo.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  // Assurez-vous d'inclure RouterOutlet et CommonModule dans les imports de votre composant
  imports: [RouterOutlet, CommonModule]
})
export class AppComponent implements OnInit {

  constructor(private serviceMeteo: MeteoService) {

  }


  ngOnInit(): void {
    this.serviceMeteo.getInformationMeteo('Montréal')
    .subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }
}
