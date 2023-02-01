import type { ReactNode} from "react";
import {useState} from "react"
import { Popover } from "../../../ui/popover";


type Props = {
  userName: string
  avatarUrl: string
  popoverContent: ReactNode
}

export const UserPopover = (props: Props) => {
  const {userName, avatarUrl, popoverContent} = props;

  const [reference, setReference] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex cursor-pointer items-center space-x-4"
        ref={setReference}
        onClick={() => {
          setIsOpen((s) => !s);
        }}
      >
        <div className="text-l">{userName || "Unknown username"}</div>

        {/*TODO: is it okay to use this kind of image in nextjs app ?*/}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className=" h-9 w-9 rounded-full bg-blue-200"
          alt={"avatar"}
          src={avatarUrl}
        />
      </div>
      <Popover
        reference={reference}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {popoverContent}
      </Popover>
    </>
  );

}