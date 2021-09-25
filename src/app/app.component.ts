import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { FilterService } from './services/filter.service';
import { UsersService } from './users.service';
import { filter, map } from 'rxjs/operators';

const EMPTY_FILTER_VALUE = 'empty filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public users: User[] = [];
  public filteredUsers: User[] = [];
  constructor(
    private usersService: UsersService,
    private filterService: FilterService
  ) {}

  public ngOnInit(): void {
    this.usersService.getUsers().subscribe((result: User[]) => {
      this.users = result;
      this.filteredUsers = result;
      console.log(this.users);
    });
    this.filterService
      .getFilter()
      .pipe(
        map((value: string) => {
          if (value === '') return EMPTY_FILTER_VALUE;
          return value;
        }),
        filter((value: string) => value.length > 2)
      )
      .subscribe((value: string) => {
        if (value === EMPTY_FILTER_VALUE) {
          this.filteredUsers = this.users;
        } else {
          this.filteredUsers = this.users.filter((user: User) =>
            user.name.includes(value)
          );
        }
      });
  }
}
