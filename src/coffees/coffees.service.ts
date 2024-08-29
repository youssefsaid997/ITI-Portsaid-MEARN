import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  create(coffee: Coffee) {
    const newCoffee = {
      ...coffee,
      id: Math.floor(Math.random() * 1000),
    };
    this.coffees.push(newCoffee);
    return newCoffee;
  }

  get() {
    return this.coffees;
  }

  patch() {}

  delete() {}

  getOne() {}
}

type Coffee = {
  coffeeName: string;
  price: number;
  country: string;
  amount: number;
};
