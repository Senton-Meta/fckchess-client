import { Routes } from '@angular/router';
import {GameComponent} from "../pages/game/game.component";
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {SandboxPageComponent} from "../pages/sandbox-page/sandbox-page.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },

  {
    path: 'sandbox',
    component: SandboxPageComponent,
  }
];
