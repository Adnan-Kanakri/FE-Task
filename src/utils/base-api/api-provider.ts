import { toast } from "react-toastify";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import RequestConfig from "./request-config";
import { RemoteServiceBaseApiUrl } from "@/constant";

export interface IBaseApiResponse<T> {
  data: T;
}

export default class ApiProvider {
  api: AxiosInstance;

  getCookieValue(key: string): string | null {
    const equalities = document.cookie.split("; ");
    for (let i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
        continue;
      }

      const splitted = equalities[i].split("=");
      if (splitted.length !== 2) {
        continue;
      }

      if (decodeURIComponent(splitted[0]) === key) {
        return decodeURIComponent(splitted[1] || "");
      }
    }

    return null;
  }

  constructor(config: RequestConfig) {
    this.api = axios.create({
      ...config,
      baseURL: `${RemoteServiceBaseApiUrl}/${config.baseURL}`,
      url: undefined,
    });
    this.api.interceptors.request.use((req: any) => {
      return {
        ...req,
        headers: {
          ...req.headers,
          Accept: "*",
        },
      };
    });
    this.api.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data === "") {
          return { ...res, data: null };
        }
        return Array.isArray(res.data)
          ? res.data
          : {
              ...res?.data,
            };
      },
      (error: any) => {
        // Show error toast
        toast.error("Something went wrong");
        return error.response?.data;
      }
    );
  }

  async request<T>(config: RequestConfig): Promise<any> {
    return await this.api.request<IBaseApiResponse<T>>(config);
  }
}
