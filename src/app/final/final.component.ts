import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { QuestionarioService } from '../questionario/questionario.service';
import { RespostaService } from '../resposta.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  private respostas: any;
  private tresPrimeiras = null;
  private quarta = null;
  private EnunciadoResposta:string[];

  constructor(private data: RespostaService, private service: QuestionarioService) {
    service.getTresPrimeiras().subscribe(response =>{
      this.tresPrimeiras = response;
    });
    service.getQuarta().subscribe(response =>{
      this.quarta = response;
    });
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.respostas = message);
  }
}
