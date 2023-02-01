import { useCallback, useState } from "react";
import Image from "next/image";
import { CreateCategoryPopup } from "./create-category-popup";
import { useIsAuthed } from "../user/lib";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const CreateCategory = () => {
  const isAuthed = useIsAuthed();
  const [isOpenedPopup, setIsOpenedPopup] = useState(false);

  const onClose = useCallback(() => {
    setIsOpenedPopup(false);
  }, []);

  if (!isAuthed) return null;

  return (
    <div>
      <IconButton
        onClick={() => setIsOpenedPopup(true)}
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddShoppingCartIcon />
      </IconButton>
      <CreateCategoryPopup isOpen={isOpenedPopup} onClose={onClose} />
    </div>
  );
};
