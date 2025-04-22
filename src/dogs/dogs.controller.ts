import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  private dogs: { id: number; name: string; age: number }[] = [];
  private idCounter = 1;

  @Get()
  getAll() {
    return this.dogs;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    const dog = this.dogs.find((d) => d.id === Number(id));
    if (!dog) throw new NotFoundException('Dog not found');
    return dog;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: { name: string; age: number }) {
    const newDog: { id: number; name: string; age: number } = {
      id: this.idCounter++,
      name: body.name,
      age: body.age,
    };

    this.dogs.push(newDog);
    return newDog;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: { name?: string; age?: number },
  ) {
    const dog = this.dogs.find((d) => d.id === Number(id));
    if (!dog) throw new NotFoundException('Dog not found');

    if (body.name !== undefined) dog.name = body.name;
    if (body.age !== undefined) dog.age = body.age;

    return dog;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    const index = this.dogs.findIndex((d) => d.id === Number(id));
    if (index === -1) throw new NotFoundException('Dog not found');
    this.dogs.splice(index, 1);
  }
}
