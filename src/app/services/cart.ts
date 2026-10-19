
import { Injectable } from '@angular/core';

export interface Pepper {
  id: string;
  title: string;
  image: string;
  desc: string;
  price: number;
  keywords: string[];
  new: boolean;
  rating: number;
}

export interface CartItem {
  product: Pepper;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cart';

  items: CartItem[] = JSON.parse(
    localStorage.getItem(this.storageKey) || '[]'
  );

  private saveCart(): void {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.items)
    );
  }

  addToCart(product: Pepper): void {
    const item = this.items.find(
      item => item.product.id === product.id
    );

    if (item) {
      item.quantity++;
    } else {
      this.items.push({
        product,
        quantity: 1
      });
    }

    this.saveCart();
  }

  removeFromCart(productId: string): void {
    const item = this.items.find(
      item => item.product.id === productId
    );

    if (!item) {
      return;
    }

    item.quantity--;

    if (item.quantity <= 0) {
      this.items = this.items.filter(
        item => item.product.id !== productId
      );
    }

    this.saveCart();
  }

  getTotalQuantity(): number {
    return this.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  getTotalPrice(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
