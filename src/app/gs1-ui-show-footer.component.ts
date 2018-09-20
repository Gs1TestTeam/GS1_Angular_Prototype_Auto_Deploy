import { Component, OnInit, Input } from '@angular/core';
import {GS1UiShowFooterIF} from './gs1-ui-components-classes/GS1UiShowFooterIF';

@Component({
  selector: 'app-gs1-ui-show-footer',
  templateUrl: './gs1-ui-show-footer.component.html',
  styleUrls: ['./gs1-ui-show-footer.component.css']
})
export class GS1UiShowFooterComponent implements OnInit, GS1UiShowFooterIF {

  constructor() { }

  ngOnInit() {
  }

  @Input() address: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() fax: string;  
}
