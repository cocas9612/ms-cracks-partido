import {Entity, model, property} from '@loopback/repository';

@model()
export class DuenoCancha extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<DuenoCancha>) {
    super(data);
  }
}

export interface DuenoCanchaRelations {
  // describe navigational properties here
}

export type DuenoCanchaWithRelations = DuenoCancha & DuenoCanchaRelations;
