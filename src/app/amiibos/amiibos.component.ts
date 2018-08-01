import { Component, OnInit } from '@angular/core';
import { AmiiboService } from '../services/amiibo.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  constructor(private amiiboService: AmiiboService) { }
  myFunction () {
    this.amiiboService.myFunction();
  }

  ngOnInit() {
    this.myFunction();
    }

}
