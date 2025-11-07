export const GAME_CONFIG = {
    rows: 20,
    cols: 60,
    tickMs: 2000
} as const;

export type GameConfig = typeof GAME_CONFIG;