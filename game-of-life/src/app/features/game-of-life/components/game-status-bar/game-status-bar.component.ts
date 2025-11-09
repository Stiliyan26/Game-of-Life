import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-game-status-bar',
  standalone: true,
  templateUrl: './game-status-bar.component.html',
  styleUrls: ['./game-status-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameStatusBarComponent {
  readonly generation = input.required<number>();
  readonly running = input.required<boolean>();

  readonly toggle = output<void>();
  readonly step = output<void>();
  readonly randomize = output<void>();

  readonly statusText = computed(() => (this.running() ? 'Running' : 'Paused'));
}

