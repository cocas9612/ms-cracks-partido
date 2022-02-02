import {Entity, model, property} from '@loopback/repository';

@model()
export class Gol extends Entity {
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
  minuto: string;


  constructor(data?: Partial<Gol>) {
    super(data);
  }
}

export interface GolRelations {
  // describe navigational properties here
}

export type GolWithRelations = Gol & GolRelations;
