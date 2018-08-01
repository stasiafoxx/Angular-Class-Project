import { Component, OnInit } from '@angular/core';
import { AmiiboService } from '../services/amiibo.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {
  public amiibos: Amiibo[];

  constructor(private amiiboService: AmiiboService) { }
  getAmiibos() {
    this.amiiboService.getAmiibos(). subscribe((amiibos: any) => this.amiibos = amiibos.amiibo);
  }

  ngOnInit() {
  this.getAmiibos

    }

}
