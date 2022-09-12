import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Ae Kuri Mahi',
        price: 500,
        image: 'assets/images/products/Ae Kuri Mahi.png',
        description:
          'Suitable for working dogs, sporting dogs or those who are always on the move, our Ae Kuri Mahi range has the right balance of nutrients, energy, and flavour to keep your active furry friend healthy and strong.',
      },
      {
        id: 2,
        title: 'Allergies',
        price: 500,
        image: 'assets/images/products/Allergies.png',
        description:
          'Our no nasties, no nonsense Perfect Bowl Food Allergies is especially created as a complete healthy diet which is easily digested for our more sensitive doggy friends with allergies. ',
      },
      {
        id: 3,
        title: 'Balanced',
        price: 500,
        image: 'assets/images/products/Balanced.png',
        description:
          'Our all-natural premium Perfect Bowl Food Balanced is lovingly blended and enriched as a healthy complete diet for our doggy friends of all shapes and sizes. ',
      },
      {
        id: 4,
        title: 'Grain Free',
        price: 500,
        image: 'assets/images/products/Grain Free.png',
        description:
          'Our specially formulated grain free dog food recipe is suitable for our doggy friends with grain allergies. Made primarily with NZ sourced fishmeal and ground potatoes. ',
      },
      {
        id: 5,
        title: 'Puppy',
        price: 500,
        image: 'assets/images/products/Puppy.png',
        description:
          'Our little puppy friends have special dietary needs for their growing brains and bodies. With no fillers, no nasties and enriched with omegas 3 + 6 and other essential vitamins and minerals.',
      },
      {
        id: 6,
        title: 'Ae Kuri Mahi Trial',
        price: 300,
        image: 'assets/images/products/Ae Kuri Mahi Trial.png',
        description:
          'Why not try our new Risk-Free 1.5kg Balanced trial pack - now in environmentally friendly brown paper bags. ',
      },
      {
        id: 7,
        title: 'Allergies Trial',
        price: 300,
        image: 'assets/images/products/Allergies Trial.png',
        description:
          'Why not try our new Risk-Free 1.5kg Balanced trial pack - now in environmentally friendly brown paper bags.',
      },
      {
        id: 8,
        title: 'Balanced Trial',
        price: 300,
        image: 'assets/images/products/Balanced Trial.png',
        description:
          'Why not try our new Risk-Free 1.5kg Allergies trial pack - now in environmentally friendly brown paper bags. ',
      },
      {
        id: 9,
        title: 'Grain Free Trial',
        price: 300,
        image: 'assets/images/products/Grain Free Trial.png',
        description:
          'Why not try our new Risk-Free 1.5kg Balanced trial pack - now in environmentally friendly brown paper bags.',
      },
      {
        id: 10,
        title: 'Puppy Trial',
        price: 300,
        image: 'assets/images/products/Puppy Trial.png',
        description:
          'Why not try our new Risk-Free 1.5kg Balanced trial pack - now in environmentally friendly brown paper bags.',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
