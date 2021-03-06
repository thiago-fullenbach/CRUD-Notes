import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { MainComponent } from './components/view/main/main.component';
import { NoteReadComponent } from './components/view/note-read/note-read.component';
import { NoteCreateComponent } from './components/view/note-create/note-create.component';
import { NoteUpdateComponent } from './components/view/note-update/note-update.component';
import { NoteDeleteComponent } from './components/view/note-delete/note-delete.component';

import { HttpClientModule } from '@angular/common/http';
import { NoteReadMoreComponent } from './components/view/note-read-more/note-read-more.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NoteReadComponent,
    NoteCreateComponent,
    NoteUpdateComponent,
    NoteDeleteComponent,
    NoteReadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
