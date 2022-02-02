import {Entity, model, property} from '@loopback/repository';

@model()
export class Hora extends Entity {
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
  hora_inicio: string;

  @property({
    type: 'string',
    required: true,
  })
  hora_fin: string;


  constructor(data?: Partial<Hora>) {
    super(data);
  }
}

export interface HoraRelations {
  // describe navigational properties here
}

export type HoraWithRelations = Hora & HoraRelations;
