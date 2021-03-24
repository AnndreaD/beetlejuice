import { Indexer } from '../services/baseTypes';
import { LogError, LogWarning, LogInfo } from './types';

export function timeStamp(time?: number) {
  const t = time ? new Date(time) : new Date();
  const hours = ('0' + t.getHours()).substr(-2);
  const min = ('0' + t.getMinutes()).substr(-2);
  const sec = ('0' + t.getSeconds()).substr(-2);
  const ms = ('00' + t.getMilliseconds()).substr(-3);
  return `${hours}:${min}:${sec}.${ms}`;
}

export const logError: LogError = (message: string, data?: Indexer) => {
  // TODO: external logger here.

  console.warn(message, data);
};

export const logWarning: LogWarning = (message: string, data?: Indexer) => {
  // TODO: external logger here.

  console.warn(message, data);
};

export const logInfo: LogInfo = (message: string, data?: Indexer) => {
  if (data) {
    console.log(`${timeStamp()}: ${message}`, data);
    // TODO: external logger here.
  } else {
    console.log(`${timeStamp()}: ${message}`);
    // TODO: external logger here.
  }
};

export {};
