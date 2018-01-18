import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOn : boolean;
  constructor(private flashLight: Flashlight, private platform: Platform) {    
    this.platform.ready().then(()=>{
      this.updateFlashlightStatus();
    });
  }

  switchOn(){
    this.flashLight.switchOn();
    this.updateFlashlightStatus();
  }

  switchOff(){
    this.flashLight.switchOff();
    this.updateFlashlightStatus();
  }

  toggle(){
    this.flashLight.toggle();
    this.updateFlashlightStatus();
  }

  private updateFlashlightStatus(){
    this.isOn = this.flashLight.isSwitchedOn();
  }

}
