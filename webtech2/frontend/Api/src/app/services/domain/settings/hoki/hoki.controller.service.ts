import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HokiResponse } from './hoki.model';
import { CreateHokiDTO as CreateHokiDTO, HokiDTO as HokiDTO, } from './hoki';

@Injectable()
export abstract class HokiController {
    public abstract getHokis(): Observable<HokiDTO[]>;
    public abstract createHoki(request: CreateHokiDTO): Observable<HokiResponse>;
    public abstract editHoki(request: HokiDTO): Observable<HokiDTO>;
    // tslint:disable-next-line: variable-name
    public abstract deleteHoki(_id: string);
}
