import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from "../newsservice.service";
@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  constructor(private NS: NewsserviceService) { }
  //data: any;
  data: any = [];
  link: any
  d2: any

  private window: any = window;
  totalRecords: Number
  page: Number = 1
  ngOnInit(): void {
    this.getData();
  }

  getData() {

    this.NS.get().subscribe((res: any) => {
      console.log(res);
      this.data = res.data
      this.totalRecords = res.data.length
      console.log(this.totalRecords);
      // this.data = JSON.stringify(res);
    })
  }
  OpenLink(d1) {

    this.link = d1.link
    window.open(this.link, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
    // window.location.href = d1.link;
    // this.d2 = window.location.href
  }
}
