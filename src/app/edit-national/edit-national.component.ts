import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NationalService} from '../national.service';
import {ActivatedRoute, Router} from '@angular/router';
import {INational} from '../national.interface';

@Component({
  selector: 'app-edit-national',
  templateUrl: './edit-national.component.html',
  styleUrls: ['./edit-national.component.scss']
})
export class EditNationalComponent implements OnInit {
data: FormGroup;
national: INational;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private nationalService: NationalService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      name: ''
    })
    ;
    const id = +this.route.snapshot.paramMap.get('id');
    this.nationalService.getById(id).subscribe(
      next => {
        this.national = next;
        this.data.patchValue(this.national);
      },
      error => {
        this.national = null;
      }
    );
  }
  editNational() {
    this.nationalService.updateNational(this.data.value).subscribe(next => {
      this.router.navigate(['/national']);
    });
  }
}
