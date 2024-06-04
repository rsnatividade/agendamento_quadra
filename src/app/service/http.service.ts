import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:8080/agendamento-quadra-api/api/quadras';

  constructor(private http: HttpClient) { }

  getData(idQuadra?: number){
    let urlAjustada = this.url;
    if(idQuadra !== undefined && idQuadra > 0){
      urlAjustada = this.url + "/" + idQuadra;
    }
    return this.http.get(urlAjustada, {responseType:'text'});
  }
}
