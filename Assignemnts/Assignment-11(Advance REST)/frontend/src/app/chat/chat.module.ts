import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Route} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'chat',component:ChatBoxComponent}
    ])
  ],
  declarations: [ChatBoxComponent]
})
export class ChatModule { }
