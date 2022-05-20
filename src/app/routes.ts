import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginApp } from "./login/login.component";
import { HomePage } from "./homePage/home.component";

export const appRoutes = [
    { 
        path: 'homePage', 
        component: HomePage 
    },
    { 
        path: 'app/:id', 
        component: HomePage 
    },
    { 
        path: '', 
        redirectTo: '/app/login', 
        pathMatch: 'full' 
    }
]