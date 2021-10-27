import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DrugagodinaComponent } from '../drugagodina/drugagodina.component';
import { PrvagodinaComponent } from '../prvagodina/prvagodina.component';
import { TrecagodinaComponent } from '../trecagodina/trecagodina.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  listaPrva():void {
    this.dialog.open(PrvagodinaComponent, {width: '450px'});
  }
  listaDruga():void {
    this.dialog.open(DrugagodinaComponent, {width: '450px'});
  }
  listaTreca():void {
    this.dialog.open(TrecagodinaComponent, {width: '450px'});
  }

}
