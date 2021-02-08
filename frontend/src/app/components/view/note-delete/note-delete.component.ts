import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NotesService } from './../notes.service';
import { Note } from './../notes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit {

  note: Note = {
    title: '',
    note: '',
    date: ''
  };

  constructor(
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.notesService.readById(id).subscribe(note => {
      this.note = note;
      console.log(this.note)
    })
  }

  deleteNote():void {
    this.notesService.delete(this.note.id).subscribe(() => {
      this.notesService.showMessage('Anotação deletada com sucesso!');
      this.router.navigate(['']);
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
