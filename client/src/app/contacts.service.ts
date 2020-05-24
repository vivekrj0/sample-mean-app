import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Contacts} from './contacts/contact';
import  { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts () {
    return this.http.get('http://localhost:3002/contacts')
      .pipe(map((res: any ) => res));
  }

  addContact (newContact) {
    var headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    return this.http.post('http://localhost:3002/contact', newContact, { headers : headers})
      .pipe(map(res => res));
  }
  deleteContact (id) {
    return this.http.delete('http://localhost:3002/contact/'+id)
      .pipe(map((res: any ) => res));
  }
}
