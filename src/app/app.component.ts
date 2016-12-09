import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `


  <div  height="500" width="100%">
    <!--  <nav  height="490" width="30%"  style="background-color:blue; float:left;">first nav</nav>-->
      <nav style="width:750px; height:500px; margin-left: auto; margin-right: auto; margin: 0 auto;">
          <a routerLink="/dashboard" routerLinkActive="active"><img src="img/NavDashboardWhite.jpg" height="490" width="auto"></a>
          <a routerLink="/movies" routerLinkActive="active"><img src="img/NavMoviesWhite.jpg" height="490" width="auto"></a>
      </nav>
  <!--    <nav height="490" width="30%"  height="500" style="background-color:red; float:left;">second nav</nav>-->
    </div>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Movies';
}
