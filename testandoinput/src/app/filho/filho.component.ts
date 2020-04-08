import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia;

  constructor() { }

  ngOnInit() {
    console.log('recebendo dados do pai')
    console.log(this.recebeFamilia);
  }

}
