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
    @Output() playerVideo: EventEmitter<any> = new EventEmitter();
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
        this.allVideoURL = changes.allVideoURL.currentValue as any;
        if (this.allVideoURL.length > 0) {
            const firstMatch = this.allVideoURL[0].path;
            this.videoMatchId.emit(this.allVideoURL[0].id);
            this.convertURLToId(firstMatch);
            if (this.player) {
                this.player.loadVideoById(this.id);
            }
        }
    }

    onStateChange(event) {
        this.ytEvent = event.data;
    }

    savePlayer(player) {
        this.player = player;
        this.playerVideo.emit(this.player);
    }

    playVideo() {
        this.player.playVideo();
    }

    pauseVideo() {
        this.player.pauseVideo();
    }

    setSlowMotion1() {
        this.player.setPlaybackRate(.25);
    }

    setSlowMotion2() {
        this.player.setPlaybackRate(.5);
    }

    setSlowMotion3() {
        this.player.setPlaybackRate(.75);
    }

    setSlowMotion4() {
        this.player.setPlaybackRate(1);
    }

    setSlowMotion5() {
        this.player.setPlaybackRate(1.25);
    }

    setSlowMotion6() {
        this.player.setPlaybackRate(1.5);
    }

    setSlowMotion7() {
        this.player.setPlaybackRate(1.75);
    }

    setSlowMotion8() {
        this.player.setPlaybackRate(2);
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
