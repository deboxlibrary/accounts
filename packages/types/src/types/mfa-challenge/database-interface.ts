import { CreateMfaChallenge } from './create-mfa-challenge';
import { MfaChallenge } from './mfa-challenge';

export interface DatabaseInterfaceMfaChallenges {
  createMfaChallenge(newMfaChallenge: CreateMfaChallenge): Promise<string>;

  findMfaChallengeByToken(token: string): Promise<MfaChallenge | null>;

  deactivateMfaChallenge(mfaChallengeId: string): Promise<void>;
}
