import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HokiDTO, HokiResponseDTO } from './hoki';
import { HokiController } from './hoki.controller.service';
import { toCreatedHoki, toHokis } from './hoki.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private controller: HokiController) { }

    getHokis(): Observable<HokiDTO[]> {
        return this.controller.getHokis().pipe(map((response: HokiDTO[]) => {
            return response ? toHokis(response) : null;
        }));
    }
    /*   title: HokiDTO.title,
      organizer: HokiDTO.organizer,
      date: HokiDTO.date,
      price: HokiDTO.price,
      sitting: HokiDTO.sitting */
    createHoki(title: string, organizer: string, date: Date, price: number, sitting: number) {
        return this.controller.createHoki({ title, organizer, date, price, sitting }).pipe(map((response: HokiResponseDTO) => {
            return response ? toCreatedHoki(response) : null;
        }));
    }

    // tslint:disable-next-line: variable-name
    editHoki(_id: string, title: string, organizer: string, isbn: string, date: Date, price: number, sitting: number) {
        return this.controller.editHoki({ _id, title, organizer, date, price, sitting }).pipe();
    }

    // tslint:disable-next-line: variable-name
    deleteHoki(_id: string) {
        return this.controller.deleteHoki(_id).pipe();
    }

}
