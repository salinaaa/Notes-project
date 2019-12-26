import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-nodes',
  templateUrl: './add-nodes.component.html',
  styleUrls: ['./add-nodes.component.scss']
})
export class AddNodesComponent implements OnInit {

constructor() { }

  defaulColor = '#fff475';

  choosenColor: string;

  openedColorBoard = false;

  colors: string[] = ['white', 'blue', 'red', 'green', '#fff475'];

  openColorBoard() {
    this.openedColorBoard = !this.openedColorBoard;
  }

  changeColor(color) {
    this.defaulColor = color;
  }
  
  ngOnInit() {
  }

}
