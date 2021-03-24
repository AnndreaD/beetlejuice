import { Indexer } from '../baseTypes';

export enum DBRoutes {
  Test = 'tester/',
}

export type WriteDataProps = {
  URL: string;
  id?: string;
  data?: Indexer;
  callBack?: () => void;
};

export type GetDataProps = {
  URL: string;
  id?: string;
  callBack: (data: Indexer | null) => void;
};
