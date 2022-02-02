import {Entity, model, property} from '@loopback/repository';

@model()
export class Jugador extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  estatura: number;

  @property({
    type: 'string',
    required: true,
  })
  pie_dominante: string;

  @property({
    type: 'string',
    required: true,
  })
  mano_dominante: string;


  constructor(data?: Partial<Jugador>) {
    super(data);
  }
}

export interface JugadorRelations {
  // describe navigational properties here
}

export type JugadorWithRelations = Jugador & JugadorRelations;
