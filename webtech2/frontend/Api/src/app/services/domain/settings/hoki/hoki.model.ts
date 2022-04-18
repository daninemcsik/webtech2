import { HokiDTO as HokiDTO, HokiResponseDTO as HokiResponseDTO } from './hoki';

export interface Hoki {
    _id: string;
    title: string;
    organizer: string;
    date: Date;
    price: number;
    sitting: number;
}

export interface HokiResponse {
    _id: string;
}
export function toHokis(productResponse: HokiDTO[]): Hoki[] {
    return productResponse.map(dto => toHoki(dto));
}

export function toHoki(hokiDTO: HokiDTO): Hoki {
    return {
        _id: hokiDTO._id,
        title: hokiDTO.title,
        organizer: hokiDTO.organizer,
        date: hokiDTO.date,
        price: hokiDTO.price,
        sitting: hokiDTO.sitting
    };
}

export function toCreatedHoki(hokiDTO: HokiResponseDTO): HokiResponse {
    return {
        _id: hokiDTO._id,
    };
}

