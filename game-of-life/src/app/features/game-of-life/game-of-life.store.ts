import { Injectable, effect, signal } from '@angular/core';

import { GAME_CONFIG } from '../../core/game-config';
import { Board, createRandomBoard, computeNextBoard } from '../../core/grid-utils';

@Injectable({ providedIn: 'root' })
export class GameOfLifeStore {

  private readonly size = {
    rows: GAME_CONFIG.rows,
    cols: GAME_CONFIG.cols,
  };

  private timerId: ReturnType<typeof setInterval> | null = null;

  readonly board = signal<Board>(createRandomBoard(this.size));
  readonly generation = signal<number>(0);
  readonly running = signal<boolean>(true);

  constructor() {
    effect(() => {
      this.running()
        ? this.startTimer()
        : this.stopTimer();
    });
  }

  randomize(): void {
    this.board.set(createRandomBoard(this.size));
    this.generation.set(0);
  }

  advance(): void {
    this.board.set(computeNextBoard(this.board(), this.size));
    this.generation.update(genCnt => genCnt + 1);
  }

  pause(): void {
    this.running.set(false);
  }

  resume(): void {
    this.running.set(true);
  }

  toggle(): void {
    this.running.update(isRunning => !isRunning);
  }

  private startTimer(): void {
    this.stopTimer();
    this.timerId = setInterval(() => this.advance(), GAME_CONFIG.tickMs);
  }

  private stopTimer(): void {
    if (this.timerId !== null) {
        clearInterval(this.timerId);
        this.timerId = null;
    }
  }
}

