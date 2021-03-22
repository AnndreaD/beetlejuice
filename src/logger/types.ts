import { Indexer } from '../services/baseTypes';

export type LogError = (message: string, data?: Indexer) => void;

export type LogWarning = (message: string, data?: Indexer) => void;

export type LogInfo = (message: string, data?: Indexer) => void;
