import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoveResponse } from 'src/app/models/loveResponse';
import { LoveRequest } from 'src/app/models/loveRequest';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../app.component.css'],
})
export class FormComponent implements OnInit {
  submitted: boolean = false;
  loading: boolean = false;
  model: LoveRequest = new LoveRequest('', '');
  result: string = '';
  percentage: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    if (this.model.fname !== '' && this.model.sname !== '') {
      this.dataService.sendGetRequest(this.model).subscribe(
        (response: any) => {
          if (response.result && response.percentage) {
            this.result = response.result;
            this.percentage = response.percentage;
            this.loading = false;
          }
        },
        (error) => console.log(error)
      );
    }
  }

  onReset() {
    this.submitted = false;
  }
}
