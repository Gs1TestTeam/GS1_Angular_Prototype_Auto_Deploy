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
  sourceCntRows: Number[] = [];
  targetCntRows: Number[] = [];
  diffCntRows: Number[] = [];

  private getDiffsSub: any;
  private getSourceCntSub: any;
  private getTargetCntSub: any;
  private getDiffCntSub: any;
  private timeSet: any;

  constructor(private router: Router, private migr: GS1GetMigartionDiffsService) { }

  ngOnInit() {

    this.getData();
    this.getSourceCount();
    this.getTargetCount();
    this.getDiffCount();

    this.timeSet = setInterval(() => {
      this.getData(); 
      this.getSourceCount();
      this.getTargetCount();
      this.getDiffCount();      
    }, 1000);
  }

  getData () : void
  {
    this.getDiffsSub =
    this.migr.getDiffRows().subscribe(data => {
        this.diffRows = data;
      }
    );
  }

  //highlight differing rows
  compareRows( row:GS1UiDifferenceRowsIF ) {
    let highlight: boolean = false;
    highlight = (row.pid != row.pid_dw ? true : false );
    highlight = (row.gtin != row.gtin_dw ? true : false );
    highlight = (row.gln != row.gln_dw ? true : false );

    return {
      'danger': highlight 
    };
  }

  getSourceCount () : void
  {
    this.getSourceCntSub =
    this.migr.getSourceDataCount().subscribe(data => {
        this.sourceCntRows = data;
      }
    );
  }

  getTargetCount () : void
  {
    this.getTargetCntSub =
    this.migr.getTargetDataCount().subscribe(data => {
        this.targetCntRows = data;
      }
    );
  }

  getDiffCount () : void
  {
    this.getDiffCntSub =
    this.migr.getDiffDataCount().subscribe(data => {
        this.diffCntRows = data;
      }
    );
  }
  // call the "unsubscribe()" methods on any saved subscriptions within the component
  ngOnDestroy() {

    clearInterval(this.timeSet);
    this.getDiffsSub.unsubscribe();
    this.getSourceCntSub.unsubscribe();
    this.getTargetCntSub.unsubscribe();
    this.getDiffCntSub.unsubscribe();    
  }
}
