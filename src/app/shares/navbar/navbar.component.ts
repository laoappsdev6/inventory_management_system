import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public setSidebarState:boolean = false;
  @Output() output_setSidebarState:any = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  animateToggleSidebar():void {
    if (this.setSidebarState == true) {
      this.setSidebarState = false;
      this.output_setSidebarState.emit(false);
    }
    else {
      this.setSidebarState = true;
      this.output_setSidebarState.emit(true);
    }
  }

}
