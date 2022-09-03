import {ChangeDetectionStrategy, Component} from '@angular/core';
import {delay, mapTo, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'loading-error-directive';

  // Example observable returning correctly
  data1$: Observable<number> = of(null).pipe(
    delay(2000),
    mapTo(999)
  )

  // Example observable throwing an Error
  data2$: Observable<string> = of(null).pipe(
    delay(4000),
    tap(() => {
      throw new Error()
    }),
    mapTo('data 2 from observable')
  )

  // Example observable returning correctly
  data3$: Observable<boolean> = of(null).pipe(
    delay(6000),
    mapTo(true)
  )

}
