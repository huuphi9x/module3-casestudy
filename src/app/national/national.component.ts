import {Component, OnInit} from '@angular/core';
import {NationalService} from '../national.service';
import {FormControl, FormGroup} from '@angular/forms';
import {INational} from '../national.interface';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.scss'],
  providers: [NationalService]
})
export class NationalComponent implements OnInit {
  output: INational[];
  info: INational;


  constructor(private nationalService: NationalService) {
    this.nationalService.getNational().subscribe(next => {
      this.output = next;
    });
  }

  ngOnInit() {
  }

  editNational(i: number) {
    this.nationalService.getById(i).subscribe(data => {
      this.info = data;
    });
  }

  deleteNational(i: number) {
    this.nationalService.deleteNational(i).subscribe(() => {
      this.output = this.output.filter(t => t.id !== i);
    }, this.errorHandle);
  }
  errorHandle(error: any) {
    alert('Can not delete National, contact admin for more information');
  }
}
