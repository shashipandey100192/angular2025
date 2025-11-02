import { Routes } from '@angular/router';
import { Homepage } from './appmodules/homepage/homepage';
import { App } from './app';
import { Contact } from './appmodules/contact/contact';
import { Errorpage } from './appmodules/sharescomponents/errorpage/errorpage';

export const routes: Routes = [

    {
        path:"",
        component:Homepage,
        title:"homepage"
    },
    {
        path:"contact",
        component:Contact,
        title:"contactpage"
    },
    {
        path:"**",
        component:Errorpage
    }
    
    
    
];
