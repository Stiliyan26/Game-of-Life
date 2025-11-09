import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { GameOfLifeStore } from '../../data-access/game-of-life.store';
import { LifeGridComponent } from '../life-grid/life-grid.component';
import { PatternService } from '../../data-access/pattern.service';
import { GameStatusBarComponent } from '../game-status-bar/game-status-bar.component';
import { PatternSelectComponent } from '../pattern-select/pattern-select.component';
import { PatternSaveFormComponent } from '../pattern-save-form/pattern-save-form.component';

@Component({
  selector: 'app-game-of-life-page',
  standalone: true,
  imports: [
    LifeGridComponent,
    GameStatusBarComponent,
    PatternSelectComponent,
    PatternSaveFormComponent,
  ],
  providers: [GameOfLifeStore, PatternService],
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
  readonly onPatternSelected = (patternId: string | null) => {
    if (patternId) {
      this.store.applyPattern(patternId);
    }
  };
  readonly handlePatternNameInput = (value: string) => {
    this.store.updatePatternName(value ?? '');
  };
  readonly onReloadPatterns = () => this.store.loadPatterns();
}
