import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div>
      <p-message class="p-message-error" *ngIf="temErro()" severity="error" text="{{text}}"></p-message>
    </div>
  `,
  styles: [`
  .p-message-error {
    margin: 0;
    margin-top: 4px;
    // padding: 3px;
    border-radius: 5px;
  }
`]
})
export class MessageComponent {

  @Input() error: string = '';
  @Input() control: any;
  @Input() text: string = '';

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}