import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.models';

@Injectable({
    providedIn: 'root'
})
export class TutorialService {
    constructor(private http: HttpClient) { }

    private tutorial: Tutorial[] = [];
    private entriesSubject: BehaviorSubject<Tutorial[]> = new BehaviorSubject<Tutorial[]>(this.tutorial);

    getEntries(): Observable<Tutorial[]> {
        return this.entriesSubject.asObservable();
    }

    addEntry(tutorial: Tutorial): void {
        this.tutorial.push(tutorial);
        this.entriesSubject.next([...this.tutorial]);
    }

    // getAll(): Observable<Tutorial[]> {
    //     return this.http.get<Tutorial[]>(baseUrl);
    // }

    // get(id: any): Observable<Tutorial> {
    //     return this.http.get(`${baseUrl}/${id}`);
    // }

    // create(data: any): Observable<any> {
    //     return this.http.post(baseUrl, data);
    // }

    // update(id: any, data: any): Observable<any> {
    //     return this.http.put(`${baseUrl}/${id}`, data);
    // }

    // delete(id: any): Observable<any> {
    //     return this.http.delete(`${baseUrl}/${id}`);
    // }

    // deleteAll(): Observable<any> {
    //     return this.http.delete(baseUrl);
    // }

    // findByTitle(title: any): Observable<Tutorial[]> {
    //     return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
    // }
}
