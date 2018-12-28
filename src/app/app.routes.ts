import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

// import {DashboardComponent} from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'Home',
      pathMatch: 'full'
  },
  // {
  //   path: 'Home',
  //   // component: DashboardComponent
  // },

];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

