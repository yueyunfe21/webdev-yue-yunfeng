import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import {WidgetNewComponent} from './components/widget/widget-chooser/widget-new/widget-new.component';

// for routing
// for example, if the url goes to /login, then load LoginComponent
const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent},
  {path: 'user/:uid/website', component: WebsiteListComponent},
  {path: 'user/:uid/website/new', component: WebsiteNewComponent},
  {path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
  {path: 'user/:uid/website/:wid/page', component: PageListComponent},
  {path: 'user/:uid/website/:wid/page/new', component: PageNewComponent},
  {path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/new/:part', component: WidgetNewComponent},
  {path: 'user/:uid/website/:wid/page/:pid/widget/:wdid', component: WidgetEditComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
