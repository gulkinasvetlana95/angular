
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.html',
  styleUrl: './basket.scss',
})
export class Basket {
  constructor(public cartService: CartService) {}

  get items() {
    return this.cartService.items;
  }

  get totalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  removeItem(productId: string): void {
    const item = this.items.find(
      item => item.product.id === productId
    );

    if (!item) return;

    for (let i = 0; i < item.quantity; i++) {
      this.cartService.removeFromCart(productId);
    }
  }
}
