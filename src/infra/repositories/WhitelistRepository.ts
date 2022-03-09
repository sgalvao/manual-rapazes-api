import { prisma } from "@/config/prisma-client";
import { LoadWhitelist } from "@/domain/services";

export class WhitelistRepository {
  async findByEmail(email: string): Promise<LoadWhitelist.Result> {
    const whitelist = await prisma.whitelist.findFirst({
      where: {
        email,
      },
    });

    return whitelist;
  }
}
