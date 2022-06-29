import React, { Children } from 'react'
import {Box,Typography} from '@material-ui/core'

import Footer from "../../common/Footer/Footer"
const MainTemplate = ({children}) => {
  return (
  <>

    <Footer/> 
  <Box>
  {children}
  </Box>
  </>
  )
}

export default MainTemplate