import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // constructor() {}

  value ='0';
  oldValue='0';
  lastOperator='';
  readyForNewInput = true;
  numberGroups= [
    [1,2,3, '+'],
    [4,5,6, '-'],
    [7,8,9, '*'],
    [0,'.','C','/'],
    ['=']
  ];
  onButtonPress(symbol){

    console.log(symbol);
    if (Number(symbol) || symbol===0) {
        console.log('is number');

        if(this.readyForNewInput){
          this.value= ''+symbol;
        }
        else{
          this.value += ''+symbol;
        }
        this.readyForNewInput= false;
    }
    else if(symbol==='C'){
        this.value='0';
        this.readyForNewInput= true;
    }
    else if(symbol==='='){
      if(this.lastOperator==="*"){
        this.value=''+(parseFloat(this.oldValue)*parseFloat(this.value));
      }
      else if(this.lastOperator==="/"){

        this.value=''+(parseFloat(this.oldValue)/parseFloat(this.value));
      }
      else if(this.lastOperator==="+"){
        this.value=''+(parseFloat(this.oldValue)+parseFloat(this.value));
      }
      else if(this.lastOperator==="-"){
        this.value=''+(parseFloat(this.oldValue)-parseFloat(this.value));
      }

    }else if(symbol==='.'){
      if(this.readyForNewInput){
        this.value= '0'+symbol;
      }
      else{
        this.value += ''+symbol;
      }
      this.readyForNewInput= false;
    }
    else{
      // association de l'operateur desiré
      this.readyForNewInput=true;
      this.oldValue = this.value;
      this.lastOperator=symbol;

    }
  }


}
