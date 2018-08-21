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
import { CreateteamcaptainComponent } from './events/createteamcaptain/createteamcaptain.component';
import { TeamcaptainComponent } from './users/teamcaptain/teamcaptain.component';

import { ShowuserbyindexComponent } from './users/user/showuserbyindex/showuserbyindex.component';
import { ShowsubeventbyidComponent } from './events/subevent/showsubeventbyid/showsubeventbyid.component';
import { ViewteamcardComponent } from './events/team-card/viewteamcard/viewteamcard.component';
import { ResultComponent } from './events/result/result.component';
import { SportComponent } from './shared/sport/sport.component';
import { ViewresultComponent } from './events/result/viewresult/viewresult.component';
import { ViewteamcardbyidComponent } from './events/team-card/viewteamcardbyid/viewteamcardbyid.component';




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
     RegisterfacsportcaptainComponent,
     CreateteamcaptainComponent,
     TeamcaptainComponent,
     
     ShowuserbyindexComponent,
     ShowsubeventbyidComponent,
     ViewteamcardComponent,
     ResultComponent,
     SportComponent,
     ViewresultComponent,
     ViewteamcardbyidComponent 



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
