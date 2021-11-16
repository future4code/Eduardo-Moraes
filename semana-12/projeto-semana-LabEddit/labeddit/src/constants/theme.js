import { createTheme } from "@material-ui/core";
import { corPrincial, corNeutra } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: corPrincial,
            ContrastText: "white"
        },
        text: {
            primary: corNeutra
        }
    }
})
export default theme