import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { RespostaService } from '../resposta.service';

@Injectable()
export class QuestionarioService {

  constructor(private http: Http, private data: RespostaService, private router: Router) {}

  urlTresPrimeiras = 'https://my-json-server.typicode.com/leonardomolinan/json/3primeiras';
  urlQuarta = 'https://my-json-server.typicode.com/leonardomolinan/json/quarta';

  getTitle(){
    return 'PERFIL DO INVESTIDOR - QUESTIONÁRIO';
  }
  
  getQuarta(){
    return this.http.get(this.urlQuarta).map(response => response.json());
  }

  getTresPrimeiras(){
    return this.http.get(this.urlTresPrimeiras).map(response => response.json());
  }
  
  onSubmit(respostas){
    this.data.changeMessage(respostas);
    this.router.navigate(['/final'])
  }
}
