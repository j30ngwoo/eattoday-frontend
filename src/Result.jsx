import { useNavigate } from "react-router-dom"
import { Button, Typography } from "@mui/joy";

export default function Result(){
  const navigate = useNavigate();
  return(
    <>
      <Button onClick={() => navigate('/')}>Back</Button>
      <Typography level="h3"> I Am Result</Typography>
    </>
  )
}