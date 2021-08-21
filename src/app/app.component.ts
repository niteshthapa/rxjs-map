import { Component,OnInit } from '@angular/core';
import { from, interval ,Subscription} from 'rxjs';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sub:Subscription;
  arr=[
    {name:"Nitesh",age:33}, {name:"Sane",age:23}
  ]
  ngOnInit() {
    const intervalNumber = interval(1000);
   this.sub =  intervalNumber.pipe(
    map(a => a*2)
   
   ).subscribe(x =>{
     if(x>5){
       this.sub.unsubscribe()
     }
   console.log('Next: ', x)
     this.addStream(x,'container1');
   }
     );
  
 from(this.arr).pipe(
   map(a=>a.name)
 ).subscribe(result=>  this.addStream(result,'container2'))
  }
  addStream(value,id){
    let el = document.createElement("li");
    el.classList.add("list-group-item");
    el.innerText = value;
    document.getElementById(id).appendChild(el)
}
}
