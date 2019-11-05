import { Component, OnInit } from '@angular/core';
import {TournamentsService} from '../tournaments.service';
import {ITournaments} from '../tournaments.interface';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
  providers: [TournamentsService]
})
export class TournamentsComponent implements OnInit {
  output: ITournaments[];
  info: ITournaments;
  constructor(private tournamentsService: TournamentsService) {
    this.tournamentsService.getTournaments().subscribe(next => {
      this.output = next;
    });
    }

  ngOnInit() {
  }

  editTournaments(i: number) {
    this.tournamentsService.getById(i).subscribe(data => {
      this.info = data;
    });
  }

  deleteTournaments(i: number) {
    this.tournamentsService.deleteTournaments(i).subscribe(() => {
      this.output = this.output.filter(t => t.id !== i);
    }, this.errorHandle);
  }
  errorHandle(error: any) {
    alert('Can not delete Tournaments, contact admin for more information');
  }
}
