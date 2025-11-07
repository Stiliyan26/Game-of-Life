export const GAME_CONFIG = {
    rows: 40,
    cols: 60,
    ticksMs: 160
} as const;

export type GameConfig = typeof GAME_CONFIG;