import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"
    ><i class="fas fa-code animated swing infinite"> </i> Copyright &copy;
      {{Year}} All Rights Reserved By
      <b>
        <a href="http://emd4it.com" target="_blank">EMD4IT Development Force</a
        ></b
      >
        Version <b>1.5.13</b>
    </span
    >

    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/amr.mossad.12979?ref=bookmarks" target="_blank"
         class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/AmrMossad8" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/amr-mossad-209976158/" target="_blank"
         class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
  Year: number = new Date().getFullYear();
}
