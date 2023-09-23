import React from 'react'
import ScheduleGrid from '../../components/schedule-grid'
import { Grid } from './styles'

const Schedule = (): JSX.Element => {
  return (
      <>
          <Grid>
              <ScheduleGrid></ScheduleGrid>
          </Grid>
      </>
  )
}

export default Schedule
