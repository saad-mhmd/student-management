import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  enrollment_date: string;
}

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private apiUrl = '/api/students/';

  constructor(private http: HttpClient) {}

  list(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  get(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}${id}/`);
  }

  create(data: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, data);
  }

  update(id: number, data: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}${id}/`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
