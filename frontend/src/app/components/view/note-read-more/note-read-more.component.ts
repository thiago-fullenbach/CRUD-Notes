import { Note } from './../notes.model';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-read-more',
  templateUrl: './note-read-more.component.html',
  styleUrls: ['./note-read-more.component.css']
})
export class NoteReadMoreComponent implements OnInit {

  note: Note = {
    title: '',
    note: '',
    date: ''
  };

  constructor(private notesService: NotesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.notesService.readById(id).subscribe(note => {
      this.note = note
    })
  }
}
