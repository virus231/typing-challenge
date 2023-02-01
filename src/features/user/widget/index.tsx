import { signIn, signOut, useSession } from "next-auth/react";
import { calcAvatarUrl, useIsAuthed } from "../lib";
import { UserPopover } from "../popover";


export const UserWidget = () => {
  const { data: sessionData } = useSession();
  const isAuth = useIsAuthed();
  const userName = sessionData?.user?.name ?? "Unknown Username";

  return <div>
    {!isAuth && (
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold  no-underline transition hover:bg-white/20"
        onClick={() => signIn()}
      >
        {"Sign in"}
      </button>
    )}
    {isAuth && (
      <UserPopover
        userName={userName}
        avatarUrl={calcAvatarUrl(userName)}
        popoverContent={
          <div>
            <div
              onClick={() => signOut()}
              className={
                "text-m my-1 cursor-pointer py-3 px-10 text-red-500 hover:bg-gray-100"
              }
            >
              Sign out
            </div>
          </div>
        }
      />
    )}
  </div>


}