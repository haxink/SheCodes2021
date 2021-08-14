import { Component, OnInit } from '@angular/core';
import { Menu, sideMenu } from '../menu.model';

@Component({
  selector: 'sc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sideMenu: Menu[];

  public ngOnInit() {
    this.sideMenu = sideMenu;
  }
}
