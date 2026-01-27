import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButtons
} from '@ionic/angular/standalone';

import { TabunganService } from '../../providers/tabungan.service';

@Component({
  selector: 'app-tab2',
  standalone: true,
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonLabel,
    IonCard,
    IonCardContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonModal,
    IonButtons
  ]
})
export class Tab2Page implements OnInit {

  data: any[] = [];
  total = 0;
  showForm = false;

  form = {
    nama: '',
    jenis: '+',
    nominal: null,
    tanggal: '',
    keterangan: ''
  };

  constructor(private api: TabunganService) {}

  ngOnInit() {
    this.load();
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  load() {
    this.api.getData().subscribe(res => {
      this.data = res;
      this.hitungTotal();
    });
  }

  simpan() {
    this.api.insert(this.form).subscribe(() => {
      this.form = {
        nama: '',
        jenis: '+',
        nominal: null,
        tanggal: '',
        keterangan: ''
      };
      this.load();
    });
  }

  hapus(id: number) {
    if (!confirm('Yakin hapus data ini?')) return;

    this.api.delete(id).subscribe(() => {
      this.load();
    });
  }

  hitungTotal() {
    this.total = 0;
    this.data.forEach(d => {
      this.total += d.jenis === '+' ? Number(d.nominal) : -Number(d.nominal);
    });
  }
}
