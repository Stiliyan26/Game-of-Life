import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

import { Pattern } from '../../data-access/pattern.models';

@Component({
  selector: 'app-pattern-select',
  standalone: true,
  templateUrl: './pattern-select.component.html',
  styleUrls: ['./pattern-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternSelectComponent {

  readonly patterns = input<Pattern[]>([], { alias: 'patterns' });
  readonly loading = input<boolean>(false);
  readonly error = input<string | null>(null);
  readonly selectedPatternId = input<string | null>(null);

  readonly refresh = output<void>();
  readonly selectionChange = output<string | null>();

  readonly hasPatterns = computed(() => this.patterns().length > 0);

  protected onSelect(value: string): void {
    this.selectionChange.emit(value.length ? value : null);
  }
}

