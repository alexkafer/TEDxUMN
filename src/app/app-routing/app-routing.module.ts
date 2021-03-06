import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EventsPageComponent } from '../events-page/events-page.component';
import { InvolvedPageComponent } from '../involved-page/involved-page.component';
import { PartnershipsPageComponent } from '../partnerships-page/partnerships-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { MeetUsComponent } from '../meet-the-team/meet-us.component';

const routes: Routes = [
  { 
    path: 'meetus',
    component: MeetUsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsPageComponent,
  },
  {
    path: 'team',
    component: InvolvedPageComponent,
  },
  {
    path: 'partnerships',
    component: PartnershipsPageComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
