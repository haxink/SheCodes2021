import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'sc-base-component',
  template: '',
})
export class BaseComponent implements OnDestroy {
  public destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
