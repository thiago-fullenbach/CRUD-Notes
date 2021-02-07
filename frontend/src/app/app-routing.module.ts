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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
