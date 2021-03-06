import { Component, OnInit } from '@angular/core';
import { ItemListComponent } from '@erp/core/base/item.list.component';
import {
  CalendarActivitiesGQL,
  CalendarActivitiesQuery,
  CalendarActivitiesQueryVariables,
  CalendarActivityListPartsFragment
} from '@erpjs/api-interfaces';
import { BasicDateComparator } from '../basic.date.comparator';
import { DataLoadingService, WindowService } from '@erp/core';

@Component({
  selector: 'erp-calendar-activities',
  template: `
      <clr-datagrid *ngIf="data">
          <clr-dg-column>ID
          </clr-dg-column>
          <clr-dg-column>Display Name
              <clr-dg-string-filter [clrDgStringFilter]="filters.displayName"></clr-dg-string-filter>
          </clr-dg-column>
          <clr-dg-column [clrDgSortBy]="startComparator">Start
          </clr-dg-column>
          <clr-dg-column [clrDgSortBy]="endComparator">End
          </clr-dg-column>
          <clr-dg-column>Owner
              <clr-dg-string-filter [clrDgStringFilter]="filters.owner_email"></clr-dg-string-filter>
          </clr-dg-column>
          <clr-dg-column>Customer
              <clr-dg-string-filter [clrDgStringFilter]="filters.customer_displayName"></clr-dg-string-filter>
          </clr-dg-column>
          <clr-dg-column>Prospect
              <clr-dg-string-filter [clrDgStringFilter]="filters.prospect_displayName"></clr-dg-string-filter>
          </clr-dg-column>


          <clr-dg-row *clrDgItems="let calendarActivity of data">
              <clr-dg-cell><a [routerLink]="['/calendarActivity',calendarActivity.id]">{{calendarActivity.id}}</a></clr-dg-cell>
              <clr-dg-cell><a [routerLink]="['/calendarActivity',calendarActivity.id]">{{calendarActivity.displayName}}</a></clr-dg-cell>
              <clr-dg-cell>{{calendarActivity.start | date : 'short'}}</clr-dg-cell>
              <clr-dg-cell>{{calendarActivity.end | date : 'short'}}</clr-dg-cell>
              <clr-dg-cell>{{calendarActivity.owner.email}}</clr-dg-cell>
              <clr-dg-cell><a [routerLink]="['/customer',calendarActivity.customer ? calendarActivity.customer.id : null]">
                  {{calendarActivity.customer ? calendarActivity.customer.displayName : ''}}</a>
              </clr-dg-cell>
              <clr-dg-cell><a [routerLink]="['/prospect',calendarActivity.prospect ? calendarActivity.prospect.id : null]">
                  {{calendarActivity.prospect ? calendarActivity.prospect.displayName : ''}}</a>
              </clr-dg-cell>
          </clr-dg-row>

          <clr-dg-footer>{{data.length}} calendar activities</clr-dg-footer>
      </clr-datagrid>
  `,
  styles: []
})
export class CalendarActivitiesComponent
  extends ItemListComponent<CalendarActivityListPartsFragment, CalendarActivitiesQuery,
    CalendarActivitiesQueryVariables, CalendarActivitiesGQL> {
  private startComparator = new BasicDateComparator('start');
  private endComparator = new BasicDateComparator('end');

  extractData(result: CalendarActivitiesQuery): Array<CalendarActivityListPartsFragment> {
    return result.calendarActivities;
  }

  getQuery(): CalendarActivitiesGQL {
    return this.calendarActivitiesGQL;
  }

  constructor(
    private calendarActivitiesGQL: CalendarActivitiesGQL,
    dataLoadingService: DataLoadingService,
    windowService: WindowService,
  ) { super(dataLoadingService, windowService); }

  async customOnInit() {
    super.setBasicItemFilter(['displayName', 'owner.email', 'customer.displayName', 'prospect.displayName']);
  }
}
