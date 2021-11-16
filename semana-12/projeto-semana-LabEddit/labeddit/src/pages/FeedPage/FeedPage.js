
import Button from "@material-ui/core/Button";
import React from "react";
import CardPost from "../../components/CardPost/CardPost";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
    useProtectedPage()
    return(
        <div>
            <CardPost />
            <Button variant="contained" color="primary">
                primary
            </Button>
        </div>
    )
}
export default FeedPage