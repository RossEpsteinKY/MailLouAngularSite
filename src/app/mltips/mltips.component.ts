import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mltips',
  templateUrl: './mltips.component.html',
  styleUrls: ['./mltips.component.scss']
})
export class MltipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {document.body.classList.add('bg-img');
}

}
