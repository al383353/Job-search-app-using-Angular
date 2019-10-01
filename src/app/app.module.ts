import { JobService } from './services/job.service';

import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
/*import { AngularFireDatabaseModule } from 'angularfire2/database';*/
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddJobsComponent } from './components/add-jobs/add-jobs.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    NavbarComponent,
    AddJobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'jobSearch'), /* jobSearch is app name */
    AngularFirestoreModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
