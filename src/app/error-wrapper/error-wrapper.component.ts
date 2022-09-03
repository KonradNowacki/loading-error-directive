import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-wrapper',
  templateUrl: './error-wrapper.component.html',
  styleUrls: ['./error-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorWrapperComponent {
  @Input() isError!: boolean;
}
