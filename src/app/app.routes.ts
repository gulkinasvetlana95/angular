import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'product/:id',
    component: ProductDetails
  },
  {
    path: '**',
    redirectTo: ''
  }
];