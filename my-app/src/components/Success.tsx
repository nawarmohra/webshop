import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"

const Success = () => {
  return (
    <Fragment>
      <Typography variant="h2" align="center">
        Tack för din beställning!
      </Typography>
      <Typography component="p" align="center" style={{ marginTop: 40 }}>
        Bekräftelse skickas till din e-post.
      </Typography>
    </Fragment>
  )
}

export default Success
