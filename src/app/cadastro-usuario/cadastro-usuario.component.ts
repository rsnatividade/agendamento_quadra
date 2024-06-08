import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  nome?: string;
  email?: string;

  usuarios: Usuario[] = [];
  dataSource = new MatTableDataSource(this.usuarios);
  displayedColumns?: string[] = ['id', 'nome', 'email'];


  constructor(){
    let usuario1 = new Usuario();
    usuario1.id = 1;
    usuario1.nome = 'Robson Natividade';
    usuario1.email = 'rsnatividade@gmail.com';
    let usuario2 = new Usuario();
    usuario2.id = 2;
    usuario2.nome = 'Fulano de Tal';
    usuario2.email = 'fulano@gmail.com';
    let usuario3 = new Usuario();
    usuario3.id = 3;
    usuario3.nome = 'Cicrano';
    usuario3.email = 'cicrano@gmail.com';
    this.usuarios.push(usuario1);
    this.usuarios.push(usuario2);
    this.usuarios.push(usuario3);

  }

  gravarUsuario(){
    let usuario = new Usuario();
    usuario.id = Math.floor(Math.random()*10);
    usuario.nome = this.nome;
    usuario.email = this.email;
    
    this.usuarios.push(usuario);
    this.dataSource.data = this.usuarios;

    this.nome = "";
    this.email = "";

  }
}
