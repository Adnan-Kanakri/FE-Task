import { service } from "@/endpoints/fe-task";
import { useQuery } from "@tanstack/react-query";

export const useGetExpenses = () => {
  return useQuery({
    queryKey: ["Expenses"],
    queryFn: () => service.getExpenses(),
  });
};

export const useGetCards = () => {
  return useQuery({
    queryKey: ["Cards"],
    queryFn: () => service.getCards(),
  });
};
