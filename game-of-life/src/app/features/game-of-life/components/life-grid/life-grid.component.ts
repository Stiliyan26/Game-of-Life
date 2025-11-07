import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Board } from '../../../../core/grid-utils';

@Component({
  selector: 'app-life-grid',
  standalone: true,
  templateUrl: './life-grid.component.html',
  styleUrls: ['./life-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifeGridComponent {
  @Input({ required: true }) board!: Board;

  readonly trackRow = (rowIndex: number): number => rowIndex;
  readonly trackCell = (cellIndex: number): number => cellIndex;

  get columnCount(): number {
    return this.board?.[0]?.length ?? 0;
  }

  get gridTemplateColumns(): string {
    const cols = this.columnCount;

    return cols > 0 ? `repeat(${cols}, var(--cell-size))` : 'none';
  }
}

