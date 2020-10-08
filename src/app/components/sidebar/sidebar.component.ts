import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/audittrail', title: 'Audittrail',  icon: 'event_note', class: '' },
    { path: '/audittrail-chart-changes-type-id-merch', title: 'Changes Type by Id Merchant Chart',  icon: 'event_note', class: '' },
    { path: '/audittrail-chart-changes-type-field', title: 'Changes Type by Field Chart',  icon: 'event_note', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
