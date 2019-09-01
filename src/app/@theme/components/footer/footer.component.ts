import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"
      ><i class="fas fa-code animated swing infinite"> </i> Copyright &copy;
      2019 All Rights Reserved By
      <b>
        <a
          href="https://wwwmasadevelopmentcom.000webhostapp.com/"
          target="_blank"
          >Eng.Hossam El Beshoty & Eng. Amr Mossad</a
        ></b
      ></span
    >
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent { }
