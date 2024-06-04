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
    let quadra1 = new Quadra();
    quadra1.id = 1;
    quadra1.nome = 'Quadra Interna';
    let quadra2 = new Quadra();
    quadra2.id = 2;
    quadra2.nome = 'Quadra Extena';
    this.quadras.push(quadra1);
    this.quadras.push(quadra2);
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
    let quadra = new Quadra();
    quadra.id = Math.floor(Math.random()*10);
    quadra.nome = this.nome;
    this.quadras.push(quadra);
    this.dataSource.data = this.quadras;
  }
}
