import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionarioService } from './questionario.service';
import { RespostaService } from '../resposta.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  titulo: any;
  tresPrimeiras : any;
  quarta : any;
  id : number;
  info: any;

  constructor(private router: Router, private service: QuestionarioService, private data: RespostaService) {
    
    service.getTresPrimeiras().subscribe(response => {
      this.tresPrimeiras = response;
    });
    service.getQuarta().subscribe(response =>{
      this.quarta = response;
    });
  }


  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.info = message);
    this.titulo = this.service.getTitle();
  }

  submit(respostas){
    this.data.changeMessage(respostas);
    this.router.navigate(['/final']);
  }
}
