import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-pattern-save-form',
  standalone: true,
  templateUrl: './pattern-save-form.component.html',
  styleUrls: ['./pattern-save-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternSaveFormComponent {
  readonly patternName = input<string>('', { alias: 'name' });
  readonly canSave = input<boolean>(false);
  readonly isSaving = input<boolean>(false);
  readonly status = input<'idle' | 'saving' | 'success' | 'error'>('idle');
  readonly message = input<string | null>(null);

  readonly save = output<void>();
  readonly nameChange = output<string>();

  readonly statusIsError = computed(() => this.status() === 'error');

  protected onInput(value: string): void {
    this.nameChange.emit(value);
  }
}

