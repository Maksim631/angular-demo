import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() title: string = "";

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  public change(event: any ): void {
    console.log(event.target.value);
    this.filterService.setFilter(event.target.value);
    // this.filterChange.next(event.target.value);
  }
}
