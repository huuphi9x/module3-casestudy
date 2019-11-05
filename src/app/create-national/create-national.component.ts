import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NationalService} from '../national.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-national',
  templateUrl: './create-national.component.html',
  styleUrls: ['./create-national.component.scss']
})
export class CreateNationalComponent implements OnInit {
data: FormGroup;

  constructor(private fb: FormBuilder, private nationalService: NationalService, private router: Router) { }

  ngOnInit() {
    this.data = this.fb.group({
    name: ''
  })
  ;
  }
  addNational() {
    this.nationalService.createNational(this.data.value).subscribe(next => {
      this.router.navigate(['/national']);
    });
    console.log(this.data.value);
  }
}
