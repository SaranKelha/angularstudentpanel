import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VieweditComponent } from './viewedit/viewedit.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'viewedit',
        component:VieweditComponent
    },
    {
        path:'viewtask',
        component:ViewtaskComponent
    }
];
