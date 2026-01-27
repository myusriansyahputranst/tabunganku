import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';


import { TabunganService } from '../../providers/tabungan.service';
import { addIcons } from 'ionicons';
import { arrowUp, arrowDown, wallet } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon
  ]
})
export class Tab1Page {

  saldo = 0;
  pemasukan = 0;
  pengeluaran = 0;
  lastData: any[] = [];

  constructor(private api: TabunganService) {}

  ionViewWillEnter() {
    this.load();
  }

 load() {
  this.api.getData().subscribe(res => {

    const sorted = [...res].sort(
      (a, b) => Number(b.id) - Number(a.id)
    );

    this.hitung(sorted);
    this.lastData = sorted.slice(0, 5);
  });
}



  hitung(data: any[]) {
    this.saldo = 0;
    this.pemasukan = 0;
    this.pengeluaran = 0;

    data.forEach(d => {
      if (d.jenis === '+') {
        this.saldo += Number(d.nominal);
        this.pemasukan += Number(d.nominal);
      } else {
        this.saldo -= Number(d.nominal);
        this.pengeluaran += Number(d.nominal);
      }
    });
  }
}
