import {Entity, model, property} from '@loopback/repository';

@model()
export class CanchaDeporte extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<CanchaDeporte>) {
    super(data);
  }
}

export interface CanchaDeporteRelations {
  // describe navigational properties here
}

export type CanchaDeporteWithRelations = CanchaDeporte & CanchaDeporteRelations;
