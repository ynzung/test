import { useQuery } from "@tanstack/react-query";
import { readComment } from "../axios";

export const useReadComment = (commentId) => {
  return useQuery({
    queryKey: ["comment", commentId],
    queryFn: () => readComment(commentId),

    enabled: !!commentId,
    staleTime: 10 * 1000,
    gcTime: 60 * 1000,

    select: (data) => data.content,
    retry: 2,
  });
};
