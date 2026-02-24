import { Component } from '@angular/core';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { ProductGrid } from '../../shared/components/product-grid/product-grid';
import { Button } from '../../shared/components/button/button';
import { OverlayCard } from '../../shared/components/overlay-card/overlay-card';
import { IconButton } from '../../shared/components/icon-button/icon-button';
import { ColorPill } from '../../shared/components/color-pill/color-pill';
import { Testimonial } from '../../shared/components/testimonial/testimonial';
import { ServiceFeature } from '../../shared/components/service-feature/service-feature';
import { BlogFeature } from '../../shared/components/blog-feature/blog-feature';

@Component({
  selector: 'app-home',
  imports: [
    HeroBanner,
    ProductGrid,
    Button,
    OverlayCard,
    IconButton,
    ColorPill,
    Testimonial,
    ServiceFeature,
    BlogFeature,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Hero Banner Data
  heroData = {
    mainImage: 'images/3071b1fc729091cd0452fb9d0b89106ceec16368.png',
    title: 'Color of<br />Summer<br />Outfit',
    subtitle: '100+ Collections for your outfit inspirations in this summer',
    ctaLabel: 'VIEW COLLECTIONS',
    sideCards: [
      {
        image: 'images/17aa3a2f29a85f64d93c41afa6b64d31b3a88038.png',
        label: 'Outdoor<br>Active',
      },
      {
        image: 'images/837e11f00233936f837e7b69d6a545511b1ba132.png',
        label: 'Casual<br>Comfort',
      },
    ],
  };

  // Casual Inspirations Data
  inspirationTitle = 'Casual<br>Inspirations';
  inspirationSubtitle =
    'Our favorite combinations for casual outfit that can inspire you to apply on your daily activity.';
  inspirationCtaLabel = 'BROWSE INSPIRATIONS';
  inspirationCards = [
    {
      image: 'images/5e143183ca0df25c3d226a223269e70541e09760.png',
      label: 'Say it<br>with Shirt',
    },
    {
      image: 'images/b0b782c02a24c60e5479cec788203caf906828d8.png',
      label: 'Funky never<br>get old',
    },
  ];

  // Trending Products Data
  trendingFilters = [
    { label: 'SHORTS', active: false },
    { label: 'HAT', active: false },
    { label: 'JACKETS', active: false },
    { label: 'SHOES', active: true },
    { label: 'T-SHIRT', active: false },
  ];

  trendingProducts = [
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

  // Explore by Colors Data
  colorPills = [
    { label: 'RED PASTEL', color: '#e74c3c' },
    { label: 'LIME GREEN', color: '#a8e619' },
    { label: 'NAVY BLUE', color: '#1a237e' },
    { label: 'CLEAN WHITE', color: '#ffffff' },
    { label: 'BLUE SKY', color: '#4fc3f7' },
    { label: 'PURPLE', color: '#9c27b0' },
    { label: 'PINK', color: '#e91e90' },
    { label: 'YELLOW', color: '#fdd835' },
    { label: 'DARK GREEN', color: '#2e7d32' },
  ];

  // Testimonial Data
  testimonialData = {
    backgroundImage: 'images/57cd86eaec4b399b54263e873dd87745943b8f88.png',
    quote: 'Love the way they handle the order.',
    text: 'Very professional and friendly at the same time. They packed the order on schedule and the detail of their wrapping is top notch. One of my best experience for buying online items. Surely will come back for another purchase.',
    authorName: 'Samantha William',
    authorRole: 'Fashion Enthusiast',
  };

  // Service Features Data
  serviceFeatures = [
    {
      icon: 'heart-fill',
      title: 'Take care with love',
      description:
        "We take care your package with full of attention and of course full of love. We want to make sure you'll receive your package like you receive your birthday gift.",
    },
    {
      icon: 'phone',
      title: 'Friendly Customer Service',
      description:
        'You do not need to worry when you want to check your package. We will always answer whatever your questions. Just click on the chat icon and we will talk.',
    },
    {
      icon: 'refresh',
      title: 'Refund Process',
      description:
        "Refund is a such bad experience and we don't want that thing happen to you. But when it's happen we will make sure you will through smooth and friendly process.",
    },
  ];

  // Blog Feature Data
  blogData = {
    image: 'images/ff3c0bb419ab7a36a466902e4bb611c667f4c3c4.png',
    title: 'How to combine your daily outfit to looks fresh and cool.',
    description:
      "Maybe you don't need to buy new clothes to have nice, cool, fresh looking outfit everyday. Maybe what you need is to combine your clothes collections. Mix and match is the key.",
    ctaLabel: 'READ MORE',
  };
}
