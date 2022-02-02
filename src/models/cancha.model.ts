import {Entity, model, property} from '@loopback/repository';

@model()
export class Cancha extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;


  constructor(data?: Partial<Cancha>) {
    super(data);
  }
}

export interface CanchaRelations {
  // describe navigational properties here
}

export type CanchaWithRelations = Cancha & CanchaRelations;
