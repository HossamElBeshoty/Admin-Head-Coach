import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IMatchVideo} from '../../../Models/i-match-video';

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
  youtubeUrl: string;
  @Input() allVideoURL: IMatchVideo[];
  @Output() videoMatchId: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {


  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }

  savePlayer(player) {
    this.player = player;
    if (this.allVideoURL.length > 0) {
      const firstMatch = this.allVideoURL[0].path;
      this.videoMatchId.emit(this.allVideoURL[0].id);
      this.convertURLToId(firstMatch);
    }
    this.player.loadVideoById(this.id);
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

  changeYoutubeLink(path: string, event) {
    this.videoMatchId.emit(event.target.options[event.target.selectedIndex].getAttribute('data-id'));
    this.youtubeUrl = path;
    if (this.youtubeUrl) {
      this.convertURLToId(this.youtubeUrl);
      this.player.loadVideoById(this.id);
    }
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
