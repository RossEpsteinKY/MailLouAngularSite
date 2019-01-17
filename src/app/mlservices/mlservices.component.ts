import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlservices',
  templateUrl: './mlservices.component.html',
  styleUrls: ['./mlservices.component.scss']
})
export class MlservicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.add('bg-img');
}
}
