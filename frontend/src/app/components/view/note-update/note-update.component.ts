import { Note } from './../notes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.css']
})
export class NoteUpdateComponent implements OnInit {

  note: Note;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.notesService.readById(id).subscribe(note => {
      this.note = note
    })
  }

  updateNote(): void {
    this.notesService.update(this.note).subscribe(() => {
      this.notesService.showMessage('Anotação alterada com sucesso!');
      this.router.navigate(['']);
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }

}
