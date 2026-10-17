
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../home/home';
interface Pepper {
  id: string;
  title: string;
  image: string;
  desc: string;
  price: number;
  keywords: string[];
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
  details: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Здесь пока получаем id из адреса страницы.
    console.log('Product ID:', id);
  }
}
