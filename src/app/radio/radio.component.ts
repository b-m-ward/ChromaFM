import { Component, OnInit } from '@angular/core';
import { channels, channel } from '../models/channel';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  stations : channel[] = channels;
  audio : HTMLAudioElement = new Audio();
  playLabel : string;
  playing : boolean;

  constructor() { }

  ngOnInit() {
    this.playing = false;
    this.playLabel = 'play';
    this.audio.src = channels[0].uri;
    this.audio.load();
  }

  selectStation(uri : string) {
    console.log(uri);
    this.audio.src = uri;
    this.audio.load();
    this.playStation();
  }

  playStation() : void {
    if(this.playing) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.playing = !this.playing;
    this.playLabel = this.playing ? 'pause' : 'play';    
  }


}
