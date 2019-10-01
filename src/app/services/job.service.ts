import { jobL } from './../models/jobL';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobsCollection: AngularFirestoreCollection<jobL>;
  jobs: Observable<jobL[]>;

  constructor(public job: AngularFirestore) {
    this.jobsCollection = this.job.collection('jobList');

    this.jobs = this.jobsCollection.valueChanges(); /*jobList is Collection id in firebase*/
  }

  getJobs() {
    /*console.log(this.jobs);*/
    return this.jobs;
  }
  addJobs(job: jobL) {
    this.jobsCollection.add(job);
  }
}

