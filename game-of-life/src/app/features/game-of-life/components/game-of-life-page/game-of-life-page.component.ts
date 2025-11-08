import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameOfLifeStore } from '../../data-access/game-of-life.store';
import { LifeGridComponent } from '../life-grid/life-grid.component';

@Component({
  selector: 'app-game-of-life-page',
  standalone: true,
  imports: [CommonModule, LifeGridComponent],
  providers: [GameOfLifeStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-of-life-page.component.html',
  styleUrls: ['./game-of-life-page.component.css'],
})
export class GameOfLifePageComponent {
  private readonly store = inject(GameOfLifeStore);

  readonly board = computed(() => this.store.board());
  readonly generation = computed(() => this.store.generation());
  readonly running = computed(() => this.store.running());

  readonly onToggle = () => this.store.toggle();
  readonly onStep = () => this.store.stepOnce();
  readonly onRandomize = () => this.store.randomize();
}
