import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-novocurriculo',
  templateUrl: './novocurriculo.page.html',
  styleUrls: ['./novocurriculo.page.scss'],
})
export class NovocurriculoPage implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

}
