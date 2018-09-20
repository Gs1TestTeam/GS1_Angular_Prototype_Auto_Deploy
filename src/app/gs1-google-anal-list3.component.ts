import {Component, OnInit, OnDestroy } from '@angular/core';

import { GS1GetMigartionDiffsService } from './gs1-get-migartion-diffs.service';
import { Router } from '@angular/router';
import { GS1UiDifferenceRowsIF } from './gs1-ui-components-classes/GS1UiDifferenceRowsIF';

@Component({
  selector: 'app-gs1-google-anal-list3',
  templateUrl: './gs1-google-anal-list3.component.html',
  styleUrls: ['./gs1-google-anal-list3.component.css']
})
export class Gs1GoogleAnalList3Component implements OnInit, OnDestroy {

  pageTitle: string = "GS1 Migration Data Integrity";

  diffRows: GS1UiDifferenceRowsIF[] = [];
  private getDiffsSub: any;
  private timeSet: any;

  constructor(private router: Router, private diffs: GS1GetMigartionDiffsService) { }

  ngOnInit() {

    this.getData(); 

    this.timeSet = setInterval(() => {
      this.getData(); 
    }, 1000);
  }

  getData () : void
  {
    this.getDiffsSub =
    this.diffs.getDiffRows().subscribe(data => {
        this.diffRows = data;
      }
    );
  }

  // call the "unsubscribe()" methods on any saved subscriptions within the component
  ngOnDestroy() {

    clearInterval(this.timeSet);
    this.getDiffsSub.unsubscribe();
  }

}
