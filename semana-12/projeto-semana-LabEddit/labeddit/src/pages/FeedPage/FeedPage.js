import Button from "@material-ui/core/Button";
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
    useProtectedPage()
    return(
        <div>
            FeedPage
            <Button variant="contained" color="primary">
                primary
            </Button>
        </div>
    )
}
export default FeedPage