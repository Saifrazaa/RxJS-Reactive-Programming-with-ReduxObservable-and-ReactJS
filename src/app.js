import $ from 'jquery';
import Rx from 'rxjs/Rx';

const input =$('#input');
const inputStream$=Rx.Observable.fromEvent(input,"keyup");
inputStream$.subscribe(function(e){
    console.log(e.currentTarget);
    
    })