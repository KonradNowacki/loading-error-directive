import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp3Component {

  @Input() data!: boolean;

}
