import {Entity, model, property} from '@loopback/repository';

@model()
export class Tarjeta extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  color: string;


  constructor(data?: Partial<Tarjeta>) {
    super(data);
  }
}

export interface TarjetaRelations {
  // describe navigational properties here
}

export type TarjetaWithRelations = Tarjeta & TarjetaRelations;
