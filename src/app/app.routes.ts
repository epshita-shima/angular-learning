import { RouterModule, Routes } from '@angular/router';
import { User } from './lifecycle-hook/home/user/user';
import { Hometeamplates } from './templates/hometeamplates/hometeamplates';
import { Home } from './lifecycle-hook/home/home';
import { ProfileCard } from './component/profile-card/profile-card';
import { NgModule } from '@angular/core';
import { UserRegistration } from './component/user-registration/user-registration';
import { UserDetailsList } from './component/user-details-list/user-details-list';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'hometeamplates', component: Hometeamplates },
  { path: 'profilecard', component: ProfileCard },
  {
    path: 'user-registration',
    component: UserRegistration,
  },
  {
    path: 'user-details',
    component: UserDetailsList,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
