import { ModalController } from '@ionic/angular';
import { Place } from './../../places/offers/place.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.selectedPlace)
  }
  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel'); //role as cancel
  }

  onBookPlace(){
    this.modalCtrl.dismiss({message: 'Dummy mess'}, 'confirm')
  }

}
