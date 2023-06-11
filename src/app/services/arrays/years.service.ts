import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class YearsService {
    constructor() { }

    getData() {
        return [
            { id: 2023, code: '2023' }, { id: 2022, code: '2022' }, { id : 2021, code: '2021' }, 
            { id: 2020, code: '2020' },
        ];
    }
}