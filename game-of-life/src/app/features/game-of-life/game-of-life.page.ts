import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameOfLifeStore } from './game-of-life.store';
import { LifeGridComponent } from './components/life-grid/life-grid.component';

@Component({
  selector: 'app-game-of-life-page',
  standalone: true,
  imports: [CommonModule, LifeGridComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./game-of-life.page.css'],
  template: `
    <section class="page" aria-live="polite">
      <header class="page__stats">
        <div class="stat">
          <span class="stat__label">Generation</span>
          <span class="stat__value">{{ generation() }}</span>
        </div>
        <div class="stat">
          <span class="stat__label">Status</span>
          <span class="stat__value">{{ running() ? 'Running' : 'Paused' }}</span>
        </div>
      </header>

      <app-life-grid [board]="board()"></app-life-grid>
    </section>
  `,
})
export class GameOfLifePageComponent {
  private readonly store = inject(GameOfLifeStore);

  readonly board = computed(() => this.store.board());
  readonly generation = computed(() => this.store.generation());
  readonly running = computed(() => this.store.running());
}

