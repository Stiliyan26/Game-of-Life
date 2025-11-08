import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameOfLifeStore } from '../../data-access/game-of-life.store';
import { LifeGridComponent } from '../life-grid/life-grid.component';
import { Pattern } from '../../data-access/pattern.models';

@Component({
  selector: 'app-game-of-life-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LifeGridComponent],
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
  readonly patternName = computed(() => this.store.patternName());
  readonly patterns = computed(() => this.store.patterns());
  readonly patternsLoading = computed(() => this.store.patternsLoading());
  readonly patternsError = computed(() => this.store.patternsError());
  readonly selectedPatternId = computed(() => this.store.selectedPatternId());
  readonly isSaving = computed(() => this.store.isSaving());
  readonly canSavePattern = computed(() => this.store.canSavePattern());
  readonly saveStatus = computed(() => this.store.saveStatus());
  readonly saveMessage = computed(() => this.store.saveMessage());

  readonly onToggle = () => this.store.toggle();
  readonly onStep = () => this.store.stepOnce();
  readonly onRandomize = () => this.store.randomize();
  readonly onSavePattern = () => this.store.saveCurrentPattern();
  readonly handlePatternSelect = (event: Event) => {
    const target = event.target as HTMLSelectElement | null;
    const value = target?.value ?? '';

    if (value) {
      this.store.applyPattern(value);
    }
  };
  readonly handlePatternNameInput = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    this.store.updatePatternName(target?.value ?? '');
  };
  readonly onReloadPatterns = () => this.store.loadPatterns();

  readonly trackPattern = (_: number, pattern: Pattern) => pattern.id;
}
