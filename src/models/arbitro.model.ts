import {Entity, model, property} from '@loopback/repository';

@model()
export class Arbitro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  certificado?: string;


  constructor(data?: Partial<Arbitro>) {
    super(data);
  }
}

export interface ArbitroRelations {
  // describe navigational properties here
}

export type ArbitroWithRelations = Arbitro & ArbitroRelations;
