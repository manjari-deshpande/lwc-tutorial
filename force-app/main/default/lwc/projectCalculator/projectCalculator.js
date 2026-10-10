import { LightningElement } from 'lwc';

export default class ProjectCalculator extends LightningElement {
    num1;
    num2;
    sum;

    handleClick(){
    this.num1 = Number(this.template.querySelector('[data-id="num-1"]')?.value || 0);
    this.num2 = Number(this.template.querySelector('[data-id="num-2"]')?.value || 0);

    console.log(this.num1);
    console.log(this.num2);
    
    this.sum = this.num1 + this.num2;

    }
}