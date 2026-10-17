
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}