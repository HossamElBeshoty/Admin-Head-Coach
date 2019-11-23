import {Component, OnInit, ChangeDetectionStrategy, ViewChild, Input, EventEmitter, Output} from '@angular/core';
import {LyResizingCroppingImages, ImgCropperConfig} from '@alyle/ui/resizing-cropping-images';
import {LyTheme2} from '@alyle/ui';

const styles = {
  actions: {
    display: 'flex',
  },
  cropping: {
    maxWidth: '100',
    height: '300px',
  },
  flex: {
    flex: 1,
  },
};

@Component({
  selector: 'ngx-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCropperComponent implements OnInit {
  @Output() imgCropper = new EventEmitter();
  classes;
  croppedImage?: string;
  @Input() onCropperHeight: number;
  @Input() onCropperWidth: number;
  @ViewChild(LyResizingCroppingImages, {static: false}) img: LyResizingCroppingImages;
  result: string;
  myConfig: ImgCropperConfig = {
    width: 150, // Default `250`
    height: 150, // Default `200`,
    autoCrop: true,
  };

  constructor(private theme: LyTheme2) {
  }

  ngOnInit() {
    this.myConfig.width = (this.onCropperWidth / 2);
    this.myConfig.height = (this.onCropperHeight / 2);
    this.myConfig.output = {width: this.onCropperWidth, height: this.onCropperHeight};
    this.classes = this.theme.addStyleSheet(styles);
  }

  onCropped(e) {
    this.croppedImage = e.dataURL;
    this.imgCropper.emit(e.dataURL);
  }
}
