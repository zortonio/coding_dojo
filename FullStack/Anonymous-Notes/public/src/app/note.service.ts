import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {

  notes = [];

  constructor(private _http: Http) { }

  getNotes(){
    return this.notes;
  }

  create(note){
    return this._http.post('/note', note).subscribe(
      (response) => {
        console.log('Successful response from the server.');
      },
      (err) => {
        console.log(err);
      }
    )
  }

  retrieveAll(callback){
    return this._http.get('/notes').subscribe(
      (response) => {
        console.log('Successful response from the server.');
        this.notes = response.json();
        callback(this.notes);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
