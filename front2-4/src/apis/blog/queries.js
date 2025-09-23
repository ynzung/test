// import { useMutation } from "@tanstack/react-query";
// import { createPost } from "../axios";

// export const useCreatePost = () => {
//   return useMutation({
//     mutationFn: ({ title, content }) => createPost({ title, content }),
//   });
// };

// import { useQuery } from "@tanstack/react-query";
// import { readPost } from "../axios";

// export const useReadPost = (postId) => {
//   return useQuery({
//     queryKey: ["post", postId],
//     queryFn: () => readPost(postId),
//     enabled: !!postId,
//     staleTime: 10000,
//     gcTime: 60000,
//   });
// };

// import { useMutation } from "@tanstack/react-query";
// import { updatePost } from "../axios";

// export const useUpdatePost = () => {
//   return useMutation({
//     mutationFn: async ({ postId, title, content }) => {
//       if (!postId) throw new Error("postId가 없습니다.");
//       return updatePost(postId, { title, content });
//     },
//   });
// };

// import { useQueryClient, useMutation } from "@tanstack/react-query";
// import { deletePost } from "../axios";

// export const useDeletePost = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (postId) => deletePost(postId),
//     onSuccess: () => {
//       alert("게시글이 삭제되었습니다.");
//       queryClient.invalidateQueries({ queryKey: ["postList"] });
//     },
//   });
// };
