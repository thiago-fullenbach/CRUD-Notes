import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { MainComponent } from './components/view/main/main.component';
import { NoteComponent } from './components/templates/note/note.component';
import { NoteReadComponent } from './components/view/note-read/note-read.component';
import { NoteCreateComponent } from './components/view/note-create/note-create.component';
import { NoteUpdateComponent } from './components/view/note-update/note-update.component';
import { NoteDeleteComponent } from './components/view/note-delete/note-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NoteComponent,
    NoteReadComponent,
    NoteCreateComponent,
    NoteUpdateComponent,
    NoteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
