export interface HokiDTO {
  _id: string;
  title: string;
  organizer: string;
  date: Date;
  price: number;
  sitting: number;
}

export interface CreateHokiDTO {
  title: string;
  organizer: string;
  date: Date;
  price: number;
  sitting: number;
}

export interface HokiResponseDTO {
  _id: string;
}
