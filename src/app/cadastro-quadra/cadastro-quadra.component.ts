import { Component } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Quadra } from '../model/quadra';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cadastro-quadra',
  templateUrl: './cadastro-quadra.component.html',
  styleUrls: ['./cadastro-quadra.component.css'],
})
export class CadastroQuadraComponent {

  displayedColumns?: string[] = ['id', 'nome'];
  nome?: string = "";
  selectedQuadra?: Quadra;
  quadras: Quadra[] = []
  dataSource = new MatTableDataSource(this.quadras);

  constructor(private httpService : HttpService){
    let quadrasStorage = localStorage.getItem("quadras");
    if(quadrasStorage){
      this.quadras = JSON.parse(quadrasStorage);
      this.dataSource.data = this.quadras;
    }
  }

  ngOnInit(){
    this.consultarQuadras();
  }

  selecionarQuadras(){
    this.consultarQuadras();
  }


  public imprimirValor(){
    console.log(this.selectedQuadra);
  }

  private consultarQuadras(){
    this.httpService.getData().subscribe(
      (response) => { 
        console.log(response);
      },
      (error) => { console.log(error); }
    );
  }

  public gravarQuadra(){

    if(this.nome == ""){
      return;
    }

    let quadra = new Quadra();
    quadra.id = Math.floor(Math.random()*10);
    quadra.nome = this.nome;
    this.quadras.push(quadra);
    localStorage.setItem("quadras", JSON.stringify(this.quadras));
    this.dataSource.data = this.quadras;

    this.nome = "";
  }
}

