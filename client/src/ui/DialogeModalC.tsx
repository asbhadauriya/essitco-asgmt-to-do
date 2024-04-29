import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'

function DialogeModalC({open,title,children}:any) {
  return (
    <Dialog open={open}>
        <DialogTitle>
            <Typography>{title}</Typography>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default DialogeModalC