import {  Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

function TodoCard({sx,name,value}:any) {
  return (
    <Card sx={sx}>
    <CardContent>
      <Stack spacing={3}>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {name}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
  )
}

export default TodoCard