import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-test',
  template: '<h2>Welcome {{name}}</h2>' +
    '<input [id]="myid" type="text" value="Kavya">' +
    '<input [disabled]="isdisabled" id="{{myid}}}" type="text" value="Kavya">' +
    '<h2 class="text-success">Munagavalasa</h2>' +
    '<h2 bind-class="successclass">Venkata</h2>' +
    '<h2 [class.text-danger]="hasError">Kavya</h2>' +
    '<h2 [ngClass]="messageclass ">Venkata Kavya</h2>',
  styleUrls: ['' +
  '.text-success{' +
  'color:green;}' +
  '.text-danger{' +
  'color:red}' +
  '.text-style{' +
  '  font-style: italic;}']
})
export class TestComponent implements OnInit {
  public peru = 'kavya';
  public myid = 'TestId';
  public isdisabled = false ;
  public successclass = 'text-success';
  public hasError = false;
  public isspecial = true;
  public messageclass = {
    'text-success' : !this.hasError,
    'text-danger'  : this.hasError,
    'text-style' : this.isspecial
  }
  @Input('parentdata') public name;

  @Output() public childevent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
    fireEvent() {
     this.childevent.emit('Hey Code evaluation');
    }
  greetuser() {
    return "Hello "+ this.peru;
  }
}
