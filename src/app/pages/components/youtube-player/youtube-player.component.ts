import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class YoutubePlayerComponent implements OnInit {
  id = 'Du3fYule9-k';
  private player;
  public ytEvent;
  playerVars = {
    cc_lang_pref: 'en',
  };

  constructor() {
  }

  ngOnInit() {
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }

  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  setSlowMotion() {
    this.player.setPlaybackRate(.25);
  }

  getCurrentTimeFromYoutubeVideo() {
    this.player.getCurrentTime();
  }
}
