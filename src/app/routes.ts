import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginApp } from "./login/login.component";
import { HomePage } from "./home/home.component";
import { EvaluateEmployee } from "./evaluate/evaluate.component";

export const appRoutes = [
    { path: 'login', component: LoginApp },
    { path: 'home', component: HomePage },
    { path: 'evaluate', component: EvaluateEmployee },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
]