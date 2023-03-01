import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: "hello-hello"
  };

  onLogoClicked(){
    alert("Hallo-Hallo!")
  }

  onKeyUp(newTtile: string){
    this.data.title = newTtile;
  }

  //title = 'test for ang_uni_course_app';
}
