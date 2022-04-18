import { HttpHeaders, HttpParameterCodec, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HokiController } from './hoki.controller.service';
import { HokiDTO, HokiResponseDTO, CreateHokiDTO } from './hoki';
import { HokiResponse } from './hoki.model';

@Injectable()
export class HttpProductController implements HokiController {
    private readonly BASE_URL = `http://localhost:5000/api/hoki`;
    public defaultHeaders = new HttpHeaders();
    public encoder: HttpParameterCodec;
    constructor(private httpClient: HttpClient) { }
    public createHoki(request: CreateHokiDTO): Observable<HokiResponseDTO> {
        return this.httpClient.post(`${this.BASE_URL}/add`, request).pipe(
            map((res: HokiResponse) => res)
        );
    }
    public editHoki(request: HokiDTO): Observable<HokiDTO> {
        return this.httpClient.put(`${this.BASE_URL}/${request._id}`, request).pipe(
            map((res: HokiDTO) => res)
        );
    }
    // tslint:disable-next-line: variable-name
    public deleteHoki(_id: string) {
        return this.httpClient.post(`${this.BASE_URL}/delete/${_id}`, null).pipe();
    }
    public getHokis(): Observable<HokiDTO[]> {
        return this.httpClient.post(`${this.BASE_URL}`, null).pipe(
            map((res: HokiDTO[]) => res)
        );
    }

}
