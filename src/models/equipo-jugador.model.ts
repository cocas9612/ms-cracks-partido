import {Entity, model, property} from '@loopback/repository';

@model()
export class EquipoJugador extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<EquipoJugador>) {
    super(data);
  }
}

export interface EquipoJugadorRelations {
  // describe navigational properties here
}

export type EquipoJugadorWithRelations = EquipoJugador & EquipoJugadorRelations;
