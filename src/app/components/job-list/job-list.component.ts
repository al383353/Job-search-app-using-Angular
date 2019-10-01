import { jobL } from './../../models/jobL';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';


@Component({ /* decorator function, takes argument properties */
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
 jobs: jobL[];

  constructor(private jobService: JobService) { }/* JobService is a dependency of this class */

  ngOnInit() {
    /*console.log('ngOninit ran');*/
    this.jobService.getJobs().subscribe(jobll => {
        //console.log(jobll);
        this.jobs = jobll;
      });
  }

}
