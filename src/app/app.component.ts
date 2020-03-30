import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  inputText="";

data=[
  {"task":"taskOne","created":"10 days ago"},
  {"task":"taskTwo","created":"15 days ago"},
  {"task":"taskThree","created":"20 days ago"}
]

 create(){

  this.data.unshift({"task":this.inputText,"created":"few second ago"});
  this.inputText="";
}

}

