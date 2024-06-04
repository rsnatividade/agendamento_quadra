import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public dialog : MatDialog){

  }
  showMenu(){
    const dialogRef = this.dialog.open(MenuDialogComponent, { position: {left: '20px', top: '20px'}});
  }
}
