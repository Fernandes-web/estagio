import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-editacurriculo',
  templateUrl: './editacurriculo.page.html',
  styleUrls: ['./editacurriculo.page.scss'],
})
export class EditacurriculoPage implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

}
