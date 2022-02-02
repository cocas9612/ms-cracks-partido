import {Entity, model, property} from '@loopback/repository';

@model()
export class Deporte extends Entity {
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
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  numero_jugadores: number;


  constructor(data?: Partial<Deporte>) {
    super(data);
  }
}

export interface DeporteRelations {
  // describe navigational properties here
}

export type DeporteWithRelations = Deporte & DeporteRelations;
