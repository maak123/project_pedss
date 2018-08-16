import { Routes } from '@angular/router'

import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';
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







export const appRoutes: Routes = [

    { path: 'user', component: UserComponent },

    

 
    
     { path: 'profile', component: ProfileComponent },

      { path: 'adminprofile', component: AdminprofileComponent },

    {
        path: 'event', component: EventsComponent,
        children: [{ path: '', component: EventComponent }]
    },
    {
        path: 'subevent', component: EventsComponent,
        children: [{ path: '', component: SubeventComponent }]
    },
      {
        path: 'teamcard', component: EventsComponent,
        children: [{ path: '', component: TeamCardComponent }]
    },
    
    {
        path: 'signup', component: UsersComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UsersComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];