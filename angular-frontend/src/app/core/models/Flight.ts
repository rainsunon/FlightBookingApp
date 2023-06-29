import { Seat } from './Seat';

export interface Flight {
  id: string;
  date: string;
  type: string;
  departure: string;
  destination: string;
  seats: Seat[];
}
