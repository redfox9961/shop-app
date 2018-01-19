import {Injectable} from '@angular/core';
import {Value} from '../models/value';

@Injectable()
export class ConstantHelperService {
  public sizes: Value[] = [
    {
      id: 1,
      value: 'xs'
    },
    {
      id: 2,
      value: 's'
    },
    {
      id: 3,
      value: 'm'
    },
    {
      id: 4,
      value: 'l'
    },
    {
      id: 5,
      value: 'xl'
    },
    {
      id: 6,
      value: 'xxl'
    }];
  public colors: Value[] = [
    {
      id: 1,
      value: '#E91E63'
    },
    {
      id: 2,
      value: '#9C27B0'
    },
    {
      id: 3,
      value: '#3F51B5'
    },
    {
      id: 4,
      value: '#2196F3'
    },
    {
      id: 5,
      value: '#4CAF50'
    },
    {
      id: 6,
      value: '#FFEB3B'
    },
    {
      id: 7,
      value: '#FF5722'
    },
    {
      id: 8,
      value: '#795548'
    },
    {
      id: 9,
      value: '#607D8B'
    },
    {
      id: 10,
      value: '#000000'
    },
    {
      id: 11,
      value: '#FFFFFF'
    }];
  public categories: Value[] = [
  {
    id: 1,
    value: 'Верхняя одежда‎'
  },
  {
    id: 2,
    value: 'Плаья'
  },
  {
    id: 3,
    value: 'Обувь'
  },
  {
    id: 4,
    value: 'Жилеты'
  },
  {
    id: 5,
    value: 'Маски'
  },
  {
    id: 6,
    value: 'Юбки'
  },
  {
    id: 7,
    value: 'Футболки'
  },
  {
    id: 8,
    value: 'Костюмы'
  }];
  constructor() {
  }

  getSizeNameByKey(key: number): string {
     const sizes = this.sizes.filter((size) => size.id === key);
     return (sizes.length) ? sizes[0].value : '';
  }

  getCategoryName(key: number): string {
    const categories = this.categories.filter((cat) => cat.id === key);
    return (categories.length) ? categories[0].value : '';
  }
}
