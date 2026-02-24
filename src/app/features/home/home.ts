import { Component } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { IconButton } from '../../shared/components/icon-button/icon-button';
import { ColorPill } from '../../shared/components/color-pill/color-pill';
import { OverlayCard } from '../../shared/components/overlay-card/overlay-card';
import { ServiceFeature } from '../../shared/components/service-feature/service-feature';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { ProductGrid } from '../../shared/components/product-grid/product-grid';
import { Testimonial } from '../../shared/components/testimonial/testimonial';
import { BlogFeature } from '../../shared/components/blog-feature/blog-feature';

@Component({
  selector: 'app-home',
  imports: [
    Button,
    IconButton,
    ColorPill,
    OverlayCard,
    ServiceFeature,
    HeroBanner,
    ProductGrid,
    Testimonial,
    BlogFeature,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  heroSideCards = [
    { image: 'images/17aa3a2f29a85f64d93c41afa6b64d31b3a88038.png', label: 'Outdoor<br>Active' },
    { image: 'images/837e11f00233936f837e7b69d6a545511b1ba132.png', label: 'Casual<br>Comfort' },
  ];

  filters = [
    { label: 'SHORTS', active: false },
    { label: 'HAT', active: false },
    { label: 'JACKETS', active: false },
    { label: 'SHOES', active: true },
    { label: 'T-SHIRT', active: false },
  ];

  products = [
    {
      name: 'Casual Shoe',
      price: '$225',
      image: 'images/5a88e5962507976b1988e6d9a08599fcba5247bd.png',
      loved: true,
    },
    {
      name: 'Skateboard Shoe',
      price: '$125',
      image: 'images/0b42775b5c482fd10ff96fad137ae5ca5aa7a561.png',
      loved: false,
    },
    {
      name: 'Skateboard Shoe',
      price: '$125',
      image: 'images/7150a0e902536ab1a554d315fc11f4ef6f9c1302.png',
      loved: false,
    },
    {
      name: 'Skateboard Shoe',
      price: '$125',
      image: 'images/c8c225ce10fd34a19ed897401decf4c2dd4806d5.png',
      loved: false,
    },
    {
      name: 'Basket Shoe',
      price: '$125',
      image: 'images/6202a986df950869c406241f2f48f416d0807241.png',
      loved: false,
    },
    {
      name: 'Sportwear Shoe',
      price: '$159',
      image: 'images/f8ae4065476b2a224ae85cd40fd6b1c7d34bc9ae.png',
      loved: false,
    },
  ];

  colorOptions = [
    { label: 'RED PASTEL', hex: '#e74c3c' },
    { label: 'LIME GREEN', hex: '#a8e619' },
    { label: 'NAVY BLUE', hex: '#1a237e' },
    { label: 'CLEAN WHITE', hex: '#ffffff' },
    { label: 'BLUE SKY', hex: '#4fc3f7' },
    { label: 'PURPLE', hex: '#9c27b0' },
    { label: 'PINK', hex: '#e91e90' },
    { label: 'YELLOW', hex: '#fdd835' },
    { label: 'DARK GREEN', hex: '#2e7d32' },
  ];

  services = [
    {
      icon: 'heart-fill',
      title: 'Take care with love',
      desc: "We take care your package with full of attention and of course full of love. We want to make sure you'll receive your package like you receive your birthday gift.",
    },
    {
      icon: 'phone',
      title: 'Friendly Customer Service',
      desc: "You do not need to worry when you want to check your package. We will always answer whatever your questions. Just click on the chat icon and we will talk.",
    },
    {
      icon: 'refresh',
      title: 'Refund Process',
      desc: "Refund is a such bad experience and we don't want that thing happen to you. But when it's happen we will make sure you will through smooth and friendly process.",
    },
  ];
}
