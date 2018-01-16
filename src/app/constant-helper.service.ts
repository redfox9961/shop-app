import {Injectable} from '@angular/core';
import {Value} from './value';

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
  public colors: Value = [
    {
      id: 1,
      value: '#9400D3'
    },
    {
      id: 2,
      value: '#4B0082'
    },
    {
      id: 3,
      value: '#0000FF'
    },
    {
      id: 4,
      value: '#00FF00'
    },
    {
      id: 5,
      value: '#FFFF00'
    },
    {
      id: 6,
      value: '#FF7F00'
    },
    {
      id: 7,
      value: '#FF0000'
    }];
  public categories: Value = [
  {
    id: 1,
    value: 'Armwear‎'
  },
  {
    id: 2,
    value: 'Dresses‎'
  },
  {
    id: 3,
    value: 'Footwear'
  },
  {
    id: 4,
    value: 'Jackets'
  },
  {
    id: 5,
    value: 'Masks'
  },
  {
    id: 6,
    value: 'Skirts'
  },
  {
    id: 7,
    value: 'Tops'
  },
  {
    id: 8,
    value: 'Suits'
  }];
  constructor() {
  }

}
