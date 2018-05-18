import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() {

       this.name =  'Jack.H';

  }

  ngOnInit() {

  },
  //
  test() {
      console.log(111)
  }

}

// 091685
//
