import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/heroes',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroesComponent
            }
        ])
    ],
    declarations: [AppComponent,HeroDetailsComponent,HeroesComponent],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule{}