import { jobL } from './../../models/jobL';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.scss']
})
export class AddJobsComponent implements OnInit {
  job: jobL = {
    title: '',
  deadline:'',
  contact: '',
  Skill:''
  }

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.job.title != '' && this.job.Skill != ''){
      this.jobService.addJobs(this.job);
      this.job.title = '';
      this.job.Skill = '';
    }
  }

}
