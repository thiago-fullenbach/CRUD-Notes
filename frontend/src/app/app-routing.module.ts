import { NoteDeleteComponent } from './components/view/note-delete/note-delete.component';
import { NoteUpdateComponent } from './components/view/note-update/note-update.component';
import { NoteCreateComponent } from './components/view/note-create/note-create.component';
import { NoteReadComponent } from './components/view/note-read/note-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NoteReadComponent
  }, {
    path: 'notes/create',
    component: NoteCreateComponent
  }, {
    path: 'notes/update/:id',
    component: NoteUpdateComponent
  }, {
    path: 'notes/delete/:id',
    component: NoteDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
