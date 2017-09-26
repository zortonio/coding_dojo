import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  note = {text: ''};
  @Output() aTaskEventEmitter = new EventEmitter();

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._noteService.create(this.note);
    this.aTaskEventEmitter.emit(null);
  }
}
