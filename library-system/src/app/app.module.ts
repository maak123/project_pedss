import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';

import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { EventlistComponent } from './events/eventlist/eventlist.component';
import { SubeventComponent } from './events/subevent/subevent.component';
import { SubeventlistComponent } from './events/subeventlist/subeventlist.component';
import { TeamCardComponent } from './events/team-card/team-card.component';
import { RegistermembersComponent } from './users/registermembers/registermembers.component';
import { RegisteramalclubmemberComponent } from './users/registermembers/registeramalclubmember/registeramalclubmember.component';
import { RegisterfacsportcaptainComponent } from './users/registermembers/registerfacsportcaptain/registerfacsportcaptain.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    AdminprofileComponent,
     EventsComponent ,
     EventlistComponent,
     EventComponent ,
     SubeventComponent,
     SubeventlistComponent,
     TeamCardComponent,
     RegistermembersComponent,
     RegisteramalclubmemberComponent,
     RegisterfacsportcaptainComponent 



  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MyDateRangePickerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
