import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  num: any;
  code: string;
  submitted = false;
  constructor(public crudApi: MailService, public fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
