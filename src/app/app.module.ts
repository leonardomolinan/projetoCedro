import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { CommonModule } from "@angular/common";
import { Browser } from 'protractor';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { FinalComponent } from './final/final.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RespostaService } from './resposta.service';
import { QuestionarioService } from './questionario/questionario.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    QuestionarioComponent,
    FinalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    routing,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {hasBackdrop:false}},
    QuestionarioService, RespostaService
  ],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent]
})
export class AppModule { }
