import { Component } from '@angular/core';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { ProductGrid } from '../../shared/components/product-grid/product-grid';
import { Testimonial } from '../../shared/components/testimonial/testimonial';
import { BlogFeature } from '../../shared/components/blog-feature/blog-feature';
import { ColorPill } from '../../shared/components/color-pill/color-pill';
import { ServiceFeature } from '../../shared/components/service-feature/service-feature';
import { OverlayCard } from '../../shared/components/overlay-card/overlay-card';
import { IconButton } from '../../shared/components/icon-button/icon-button';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-home',
  imports: [
    HeroBanner,
    ProductGrid,
    Testimonial,
    BlogFeature,
    ColorPill,
    ServiceFeature,
    OverlayCard,
    IconButton,
    Button
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  // Hero Section
  heroSideCards = [
    { image: 'images/5e143183ca0df25c3d226a223269e70541e09760.png', label: 'Outdoor<br>Active' },
    { image: 'images/6972db764beefc93072c91dba3bbf52a478ee908.png', label: 'Casual<br>Comfort' }
  ];

  // Casual Inspirations Section
  inspirationCards = [
    {
      image: 'images/837e11f00233936f837e7b69d6a545511b1ba132.png',
      label: 'Say it<br>with Shirt'
    },
    {
      image: 'images/b0b782c02a24c60e5479cec788203caf906828d8.png',
      label: 'Funky never<br>get old'
    }
  ];

  // Trending Section
  trendingFilters = [
    { label: 'SHORTS', active: false },
    { label: 'HAT', active: false },
    { label: 'JACKETS', active: false },
    { label: 'SHOES', active: true },
    { label: 'T-SHIRT', active: false }
  ];

  trendingProducts = [
    { name: 'Casual Shoe', price: '$225', image: 'images/5a88e5962507976b1988e6d9a08599fcba5247bd.png', loved: true },
    { name: 'Skateboard Shoe', price: '$125', image: 'images/0b42775b5c482fd10ff96fad137ae5ca5aa7a561.png', loved: false },
    { name: 'Skateboard Shoe', price: '$125', image: 'images/c8c225ce10fd34a19ed897401decf4c2dd4806d5.png', loved: false },
    { name: 'Skateboard Shoe', price: '$125', image: 'images/7150a0e902536ab1a554d315fc11f4ef6f9c1302.png', loved: false },
    { name: 'Basket Shoe', price: '$125', image: 'images/6202a986df950869c406241f2f48f416d0807241.png', loved: false },
    { name: 'Sportwear Shoe', price: '$159', image: 'images/f8ae4065476b2a224ae85cd40fd6b1c7d34bc9ae.png', loved: false }
  ];

  // Color Pills Section
  colors = [
    { label: 'RED PASTEL', color: '#e74c3c' },
    { label: 'LIME GREEN', color: '#b4e832' },
    { label: 'NAVY BLUE', color: '#1e3a5f' },
    { label: 'CLEAN WHITE', color: '#f8f9fa' },
    { label: 'BLUE SKY', color: '#5dade2' },
    { label: 'PURPLE', color: '#9b59b6' },
    { label: 'PINK', color: '#ec407a' },
    { label: 'YELLOW', color: '#f4d03f' },
    { label: 'DARK GREEN', color: '#27ae60' }
  ];

  // Service Features Section
  services = [
    {
      icon: 'heart-fill',
      title: 'Take care with love',
      description: "We take care your package with full of attention and of course full of love. We want to make sure you'll receive your package like you receive your birthday gift."
    },
    {
      icon: 'phone',
      title: 'Friendly Customer Service',
      description: 'You do not need to worry when you want to check your package. We will always answer whatever your questions. Just click on the chat icon and we will talk.'
    },
    {
      icon: 'refresh',
      title: 'Refund Process',
      description: "Refund is a such bad experience and we don't want that thing happen to you. But when it's happen we will make sure you will through smooth and friendly process."
    }
  ];
}
