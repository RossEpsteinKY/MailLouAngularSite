import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlfaq',
  templateUrl: './mlfaq.component.html',
  styleUrls: ['./mlfaq.component.scss']
})
export class MlfaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {document.body.classList.add('bg-img');
  }

}
