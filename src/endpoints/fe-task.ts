import ApiService from "@/utils/base-api/api-service";
import { ICardResponse, IExpenseResponse } from "./dtos";

class Service extends ApiService {
  constructor() {
    super({
      baseURL: "",
    });
  }

  async getExpenses(): Promise<IExpenseResponse> {
    return await this.get("/aea971bf-1ec6-4f18-a813-4f55b736d20b");
  }

  async getCards(): Promise<ICardResponse> {
    return await this.get("/e74f9787-1dda-44f7-a00a-59c3ae98a679");
  }
}

export const service = new Service();
