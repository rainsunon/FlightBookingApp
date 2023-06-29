export interface Seat {
  seatId: string;
  aisle: string;
  row: string;
  seatClass: string;
  price: number;
  clientId: string;
  isReserved: boolean;
  isEmergencySeat: boolean;
}
