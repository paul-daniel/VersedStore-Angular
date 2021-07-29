import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'src/app/models/RadioOption';

@Component({
  selector: 'app-radio-groups',
  templateUrl: './radio-groups.component.html',
  styleUrls: ['./radio-groups.component.scss'],
})
export class RadioGroupsComponent implements OnInit {
  optionList: RadioOption[] = [];
  constructor() {}

  ngOnInit(): void {
    this.optionList = [
      {
        name: 'type',
        label: 'personnal',
        id: 'personnal',
      },
      {
        name: 'type',
        label: 'business',
        id: 'business',
      },
    ];
  }
}
