import { useSession } from "next-auth/react";


export const calcAvatarUrl = (username: string) => `https://www.gravatar.com/avatar/${username}?d=identicon`;

export const useIsAuthed = (): boolean => {
  const { data: sessionData } = useSession();
  const id = sessionData?.user?.id;

  return !!id;
};