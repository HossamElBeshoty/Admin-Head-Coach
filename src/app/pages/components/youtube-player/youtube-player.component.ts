import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ngx-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class YoutubePlayerComponent implements OnInit, OnChanges {
  id;
  private player;
  public ytEvent;
  playerVars = {
    cc_lang_pref: 'en',
  };
  @Input() youtubeUrl: string;

  constructor() {
  }

  ngOnInit() {
    if (this.youtubeUrl) {
      this.convertURLToId(this.youtubeUrl);
      this.player.loadVideoById(this.id);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.youtubeUrl) {
      this.convertURLToId(this.youtubeUrl);
      this.player.loadVideoById(this.id);
    }
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

  convertURLToId(url) {
    const videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    if (videoid != null) {
      this.id = videoid[1];
    } else {
      // console.log("The youtube url is not valid.");
    }
  }
}
