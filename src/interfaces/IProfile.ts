export interface PlatformInfo {
  platformSlug: string;
  platformUserId: string;
  platformUserHandle: string;
  platformUserIdentifier: string;
  avatarUrl: string;
  additionalParameters?: any;
}

export interface UserInfo {
  isPremium: boolean;
  isVerified: boolean;
  isInfluencer: boolean;
  countryCode?: any;
  customAvatarUrl?: any;
  socialAccounts?: any;
}

export interface Metadata {
  currentSeason: number;
  activeLegendName: string;
}

export interface Attributes {
  id: string;
}

export interface Metadata2 {
  name: string;
  imageUrl: string;
  tallImageUrl: string;
  bgImageUrl: string;
  isActive?: boolean;
}

export interface Metadata3 {}

export interface Level {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata3;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata4 {}

export interface Kills {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata4;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata5 {}

export interface SeasonWins {
  rank?: any;
  percentile: number;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata5;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata6 {
  iconUrl: string;
}

export interface RankScore {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category?: any;
  metadata: Metadata6;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Stats {
  level: Level;
  kills: Kills;
  seasonWins: SeasonWins;
  rankScore: RankScore;
}

export interface Segment {
  type: string;
  attributes: Attributes;
  metadata: Metadata2;
  expiryDate: Date;
  stats: Stats;
}

export interface IProfile {
  platformInfo: PlatformInfo;
  userInfo: UserInfo;
  metadata: Metadata;
  segments: Segment[];
  availableSegments: any[];
  expiryDate: Date;
}

export default IProfile;
