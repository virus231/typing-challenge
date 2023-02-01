import { Divider, TextField } from "@mui/material";
import { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateCategoryPopup = (props: Props) => {
  const { isOpen, onClose } = props;

  const [name, setName] = useState("");
  const [fragment, setFragment] = useState("");


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <div className="mb-6 flex items-center">
            <Typography>Add new category</Typography>
          </div>
          <Box display="flex" flexDirection="column" justifyContent="space-around">
            <TextField
              value={name}
              onChange={e => setName(e.target.value)}
              id="outlined-textarea"
              label="Add Name"
              placeholder="Name"
              multiline
            />

            <Box className="my-2"/>

            <TextField
              id="outlined-multiline-static"
              label="Text"
              multiline
              value={fragment}
              onChange={e => setFragment(e.target.value)}
              rows={4}
            />

            <Box className="my-2"/>


            <Button disabled={!name || !fragment} variant="contained">Contained</Button>
            {/*<button*/}
            {/*  disabled={!name}*/}
            {/*  // onClick={() => {*/}
            {/*  //   mutation.mutate({*/}
            {/*  //     name,*/}
            {/*  //   });*/}
            {/*  //   setName("");*/}
            {/*  // }}*/}
            {/*  className="button-outline"*/}
            {/*>*/}
            {/*  Add*/}
            {/*</button>*/}
          </Box>

        </Box>
      </Fade>
    </Modal>

  );
};
