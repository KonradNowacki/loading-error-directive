import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp2Component {

  @Input() data!: string;
}
