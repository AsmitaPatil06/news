import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }
  public show: boolean = false;
  public buttonName: any = 'Show';

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }


  Feedback() {
    console.log("HIi");
    // this.router.navigateByUrl('/feed');
    this.router.navigate(['/feed']);
  }

}
