import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "../axios";

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId) => deleteComment(commentId),
    onSuccess: () => {
      alert("댓글이 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["commentList"] });
    },
    onError: (error) => {
      console.error("댓글 삭제 실패:", error.message);
    },
  });
};
