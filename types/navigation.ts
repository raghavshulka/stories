export type RootStackParamList = {
  Home: undefined;
};

export interface StoriesObj {
  id: number;
  category: string;
  img: string;
  english: {
    title: string;
    story: string;
  };
}
