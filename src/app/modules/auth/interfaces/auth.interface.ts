export interface Auth {
  email: string;
  password: string;
}

export interface AuthResponse {
  operationType: string;
  credential: any;
  additionalUserInfo: AdditionalUserInfo;
  user: User;
}

export interface AdditionalUserInfo {
  isNewUser: boolean;
  providerId: string;
  profile: Profile;
}

export interface Profile {}

export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: ProviderDatum[];
  stsTokenManager: StsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
  displayName: string;
}

export interface ProviderDatum {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
}

export interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
