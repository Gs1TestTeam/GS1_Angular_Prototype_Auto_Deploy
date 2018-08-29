import { Component, OnInit, Input} from '@angular/core';
import {GS1UiShowNavigationIF} from './GS1UiShowNavigationIF';
import { GS1GetMenuListService } from './gs1-get-menu-list.service';//added by Olga
import { MenuItem } from './MenuItem'; //added by Olga

@Component({
  selector: 'app-gs1-ui-show-navigation',
  templateUrl: './gs1-ui-show-navigation.component.html',
  styleUrls: ['./gs1-ui-show-navigation.component.css']
})
export class GS1UiShowNavigationComponent implements OnInit, GS1UiShowNavigationIF {
  navList: MenuItem[]; //added by Olga

  constructor(menuListService: GS1GetMenuListService) { 
    this.navList = menuListService.getMenuList();
  } //added by Olga

  ngOnInit() {
  }
  @Input("displayN") displayNames: Array<string>;
  @Input("gUrl") goUrls: Array<string>;
}