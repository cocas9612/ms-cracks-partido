import {Entity, model, property} from '@loopback/repository';

@model()
export class ArbitroDeporte extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<ArbitroDeporte>) {
    super(data);
  }
}

export interface ArbitroDeporteRelations {
  // describe navigational properties here
}

export type ArbitroDeporteWithRelations = ArbitroDeporte & ArbitroDeporteRelations;
