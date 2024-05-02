import { FormControl, Grid, TextField, Typography } from "@mui/material";

function FormTextField({ label, id, size, extraInfo = null, ...props }: any) {
  return (
    <Grid item lg={size ? size : 4} md={6} sm={12} xs={12}>
      <FormControl
        fullWidth
        margin="dense"
        required
        // sx={{ flexDirection: "column" }}
      >
        <Typography variant="subtitle1">
          {label}
          <span style={{ color: "red" }}>{props.required ? " *" : null}</span>
        </Typography>

        <TextField
          fullWidth
          {...props}
          id={id}
          sx={{
            background: props?.disabled ? "rgb(232, 241, 250)" : "",
            borderRadius: "9px",

            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D3D3D3 ",
              borderRadius: "9px",
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#2196f3",
              },
           
          }}
          helperText={props?.error}
          size="small"
          type={props.type ? props.type : "text"}
        />
        {extraInfo ? (
          <span className="text-cyan-900">
            Last EmployeeCode Used was {extraInfo}
          </span>
        ) : null}
      </FormControl>
    </Grid>
  );
}
export default FormTextField;
