import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../home/home';
import { CartService } from '../../services/cart';
interface Pepper {
  id: string;
  title: string;
  image: string;
  desc: string;
  price: number;
  keywords: string[];
  new: boolean;
  rating: number;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {
  product?: Pepper;
  details?: {
    id: string;
    description: string;
    reviews: {
      title: string;
      name: string;
      avatar: string;
      rating: number;
      text: string;
    }[];
    specifications: {
      label: string;
      value: string;
    }[];
  };

  private home = new Home();

  constructor(
  private route: ActivatedRoute,
  private cartService: CartService
) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.product = this.home.peppers.find(
      product => product.id === id
    );

    this.details = this.home.productDetails.find(
      item => item.id === id
    );
     this.AddProduct = this.product
    ? this.cartService.items.find(
        item => item.product.id === this.product!.id
      )?.quantity ?? 0
    : 0;
  }
  showSpecifications = false;

  AddProduct: number = 0;

ClickPlus(): void {
  if (!this.product) return;

  this.cartService.addToCart(this.product);
  this.AddProduct = this.cartService.items.find(
    item => item.product.id === this.product!.id
  )?.quantity ?? 0;
}

ClickMinus(): void {
  if (!this.product) return;

  this.cartService.removeFromCart(this.product.id);
  this.AddProduct = this.cartService.items.find(
    item => item.product.id === this.product!.id
  )?.quantity ?? 0;
}
}