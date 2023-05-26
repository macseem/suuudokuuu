import { InitialDateConstant } from '../constants/date.constant';

import { type CellInterface } from './cell.interface';
import { type FieldInterface } from './field.interface';

/**
 * General game state, used for logic and persisting
 */
export interface GameStateInterface {
    score: number;
    mistakes: number;
    calculatedAt: Date;
    startedAt: Date;
    completionPercent: number;
    filledField: FieldInterface;
    gameField: FieldInterface;
    selectedCell?: CellInterface;
    selectedValue?: number;
}

export type PersistedGameStateInterface = Omit<GameStateInterface, 'calculatedAt' | 'startedAt'> & {
    calculatedAt: string;
    startedAt: string;
};

export const emptyGameState: GameStateInterface = {
    startedAt: InitialDateConstant,
    calculatedAt: InitialDateConstant,
    completionPercent: 0,
    filledField: [],
    gameField: [],
    mistakes: 0,
    score: 0
};
