import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('api/coffees')
export class CoffeesController {
  private service;
  constructor(private readonly coffeeService: CoffeesService) {}
  @Get()
  getAllCoffess() {
    return this.coffeeService.get();
  }

  @Get(':id')
  getOneCoffee(@Param('id') id: string) {
    return `return coffee with ${id}`;
  }

  @Post()
  createCoffee(@Body() body) {
    console.log(body);

    return this.coffeeService.create(body);
  }

  @Patch(':id')
  updateCoffee(@Param('id') id: string, @Body() body) {
    console.log(body, id);

    return `we will update ${id} with ${body.coffeeName}`;
  }
}
