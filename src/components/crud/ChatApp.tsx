import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api_crud } from ".";
import type { ITODO } from "./types";

const useCreateQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newMessage: { author: string; message: string }) => {
      const params = new URLSearchParams();
      params.append("author", newMessage.author);
      params.append("message", newMessage.message);
      const response = await api_crud.post("/messages", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/messages"] });
    },
  });
};

const useGetQuery = () => {
  return useQuery<ITODO.CreateTodores[], Error>({
    queryKey: ["/messages"],
    queryFn: async () => {
      const response = await api_crud.get("/messages");
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
};

export { useCreateQuery, useGetQuery };
