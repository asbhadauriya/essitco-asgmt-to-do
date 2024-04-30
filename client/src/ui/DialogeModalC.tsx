import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import React from "react";

export default function DialogeModal({
  open,
  handleClose,
  title = null,
  children,
  size = "sm",
}: {
  open: boolean;
  handleClose?: () => void;
  title?: any;
  children: React.ReactNode;
  size: string | any;
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={size}
      fullWidth
      disableScrollLock={true}
    >
      <DialogTitle style={{ backgroundColor: title?.length ? "#e9e9e9" : "",padding:'16px 14px' }}>
        <div
          className="w-100 d-flex justify-between align-center"
          style={{
            display: "flex",
            justifyContent: title?.length ? "space-between" : "flex-end",
            alignItems: "center",
            
          }}
        >
          {title?.length ? <span>{title}</span> : null}
          <Box>
            <Button onClick={handleClose} variant="text" type="button">
              <CloseIcon
                fontSize="small"
                style={{ color: "black", padding: 0 }}
                onMouseEnter={(e: any) => (e.target.style.color = "#333")}
                onMouseLeave={(e: any) => (e.target.style.color = "black")}
              />
            </Button>
          </Box>
        </div>
      </DialogTitle>
      {children}
    </Dialog>
  );
}
