import { WhitelistRepository } from "@/infra/repositories";
import { Whitelist } from "../entities";

export class LoadWhitelistService {
  constructor(private readonly whitelistRepository: WhitelistRepository) {}

  async load(email: string): Promise<LoadWhitelist.Result> {
    const whitelist = await this.whitelistRepository.findByEmail(email);
    return whitelist;
  }
}
export namespace LoadWhitelist {
  export type Result = Whitelist;
}
