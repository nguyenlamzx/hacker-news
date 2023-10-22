import { emptySplitApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getV0ByStoryIdJson: build.query<
      GetV0ByStoryIdJsonApiResponse,
      GetV0ByStoryIdJsonApiArg
    >({
      query: (queryArg) => ({
        url: `/v0/${queryArg.storyId}.json`,
        params: { print: queryArg.print },
      }),
    }),
    getV0ItemByItemIdJson: build.query<
      GetV0ItemByItemIdJsonApiResponse,
      GetV0ItemByItemIdJsonApiArg
    >({
      query: (queryArg) => ({
        url: `/v0/item/${queryArg.itemId}.json`,
        params: { print: queryArg.print },
      }),
    }),
    getV0UserByUserIdJson: build.query<
      GetV0UserByUserIdJsonApiResponse,
      GetV0UserByUserIdJsonApiArg
    >({
      query: (queryArg) => ({ url: `/v0/user/${queryArg.userId}.json` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as hackerNewsApi };
export type GetV0ByStoryIdJsonApiResponse =
  /** status 200 List of up to 500 top story IDs retrieved successfully. */ ListOfItemId;
export type GetV0ByStoryIdJsonApiArg = {
  /** The story Id */
  storyId: string;
  /** Set to "pretty" for pretty-printed JSON. */
  print?: string;
};
export type GetV0ItemByItemIdJsonApiResponse =
  /** status 200 Item details retrieved successfully. */ HackerNewsItem;
export type GetV0ItemByItemIdJsonApiArg = {
  /** The ID of the Hacker News item. */
  itemId: number;
  /** Set to "pretty" for pretty-printed JSON. */
  print?: string;
};
export type GetV0UserByUserIdJsonApiResponse =
  /** status 200 User details retrieved successfully. */ User;
export type GetV0UserByUserIdJsonApiArg = {
  /** The username of the Hacker News user. */
  userId: string;
  /** The ID of the Hacker News item. */
  itemId: number;
};
export type ListOfItemId = number[];
export type HackerNewsItem = {
  id: number;
  by: string;
  time: number;
  text?: string;
  kids?: number[];
  descendants?: number;
  score?: number;
  title?: string;
  type: HackerNewsItemType;
  url?: string;
};
export type User = {
  id: string;
  created?: number;
  karma?: number;
  about?: string;
  submitted?: number[];
};
export enum HackerNewsItemType {
  Story = "story",
  Comment = "comment",
  Job = "job",
  Poll = "poll",
  Pollopt = "pollopt",
}
export const {
  useGetV0ByStoryIdJsonQuery,
  useGetV0ItemByItemIdJsonQuery,
  useGetV0UserByUserIdJsonQuery,
} = injectedRtkApi;
