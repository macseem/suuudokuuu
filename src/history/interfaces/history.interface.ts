import { DifficultyEnum } from '../../@generic/enums/difficulty.enum';

import { emptyGameHistory, type GameHistoryInterface } from './game-history.interface';

export interface HistoryInterface {
    byDifficulty: Record<DifficultyEnum, GameHistoryInterface>;
}

export const emptyHistory: HistoryInterface = {
    byDifficulty: {
        [DifficultyEnum.Newbie]: emptyGameHistory,
        [DifficultyEnum.Easy]: emptyGameHistory,
        [DifficultyEnum.Medium]: emptyGameHistory,
        [DifficultyEnum.Hard]: emptyGameHistory,
        [DifficultyEnum.Nightmare]: emptyGameHistory
    }
};
