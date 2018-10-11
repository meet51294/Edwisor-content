import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalViewComponent } from './normal-view/normal-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Router } from '@angular/router';
import { AdminEditComponent } from './admin-edit/admin-edit.component'
import { EventsViewComponent } from './events-view/events-view.component';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { SocketService } from '../socket.service';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    CalendarModule.forRoot(),
    RouterModule.forChild([
      { path: 'normal', component: NormalViewComponent },
      { path: 'admin', component: AdminViewComponent },
      { path: 'admin-edit/:userId', component: AdminEditComponent },
      { path: 'events-edit/:id/:day', component: EventsViewComponent },
      { path: 'add-event/:id', component: AddEventComponent },
      { path:'edit-event/:id',component:EditEventComponent}
    ]),
    FormsModule
  ],
  declarations: [NormalViewComponent, AdminViewComponent, AdminEditComponent, EventsViewComponent, AddEventComponent, EditEventComponent],
  providers: [SocketService]

})
export class SlotManagementModule { }
