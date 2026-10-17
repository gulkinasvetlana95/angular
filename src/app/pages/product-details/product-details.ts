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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.product = this.home.peppers.find(
      product => product.id === id
    );

    this.details = this.home.productDetails.find(
      item => item.id === id
    );
  }
  showSpecifications = false;
}