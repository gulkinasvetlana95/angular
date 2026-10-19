import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetails } from './pages/product-details/product-details';
import {Recipes} from './pages/recipes/recipes';
import {Register} from './pages/register/register';
import {Login} from './pages/login/login';
import {ForgotPassword} from './pages/forgot-password/forgot-password';
import {Basket} from './pages/basket/basket';
import {Account} from './pages/account/account';



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
    path: 'Recipes',
    component: Recipes
  },
  {
    path: 'Register',
    component: Register
  },
  {
    path: 'Login',
    component: Login
  },
  {
    path: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: 'Basket',
    component: Basket
  },
  {
    path: 'Account',
    component: Account
  },
  
  {
    path: '**',
    redirectTo: ''
  }
];