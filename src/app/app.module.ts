import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SelectRoleComponent } from './select-role/select-role.component';



const appRoutes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'selectrole', component: SelectRoleComponent },
    { path: '**', component: AppComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        SelectRoleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
