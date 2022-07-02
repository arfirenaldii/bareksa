import React from 'react';
import styled from 'styled-components';

import Calendar from 'components/Calendar'
import Button from 'components/Button'

const ButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
  gap: 16px;
  margin: 32px 0px;
`

const CalendarWrapper = styled.div`
  margin: 16px;
`

function FilterButton(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <ButtonWrapper>
        <Button
          color="white"
          line={true}
          handleRoute={props.onClickCancel}
        >
          Cancel
        </Button>
        <Button
          color="green"
          handleRoute={props.onClickFilter}
        >
          Filter
        </Button>
      </ButtonWrapper>
    </div>
  )
}

function OrderCalendar(props) {
  return (
    <CalendarWrapper>
      <Calendar
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={props.minDate}
        maxDate={props.maxDate}
        onChange={props.onChange}
        {...props}
      >
        <FilterButton
          onClickCancel={props.onClickCancel}
          onClickFilter={props.onClickFilter}
          {...props}
        />
      </Calendar>
    </CalendarWrapper>
  )
}

export default OrderCalendar
