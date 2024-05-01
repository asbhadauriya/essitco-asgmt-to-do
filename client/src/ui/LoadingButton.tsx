import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  children,
  ...buttonProps // Destructure other ButtonProps
}) => {
  return (
    <div>
      <Button
        {...buttonProps} // Spread other ButtonProps
        variant="contained"
        color="primary"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : children}
      </Button>
    </div>
  );
};

export default LoadingButton;
