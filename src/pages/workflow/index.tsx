import React, { useState } from 'react';
import { useWorkflowApiGatewayMutation } from '../../__data__/services/api/workflow';

const Form1 = ({handleNext, handleBack}) => (
  <>
    <h2>Form1</h2>
    <input type="email" name="email" id="e" />
    <button onClick={handleBack}>Back</button>
    <button onClick={handleNext}>Next</button>
  </>
)

const Form2 = ({handleNext, handleBack}) => (
  <>
    <h2>Form2</h2>
    <input type="date" name="Date" id="q" />
    <button onClick={handleBack}>Back</button>
    <button onClick={handleNext}>Next</button>
  </>
)

const Form3 = ({handleNext, handleBack}) => (
  <>
    <h2>Form3</h2>
    <input type="checkbox" name="checkbox" id="c" />
    <button onClick={handleBack}>Back</button>
    <button onClick={handleNext}>Next</button>
  </>
)

const process = {
  firstFlow: {
    form1: Form1,
    form2: Form2,
    form3: Form3
  },
  secondFlow: {
    form1: Form2,
    form2: Form3,
    form3: Form1
  }
}

const Workflow = () => {
  const [state, setState] = useState(null)
  const [workflowApiGateway, result] = useWorkflowApiGatewayMutation()

  const handleBack = (event) => {
    event.preventDefault()
    workflowApiGateway({ cmd: 'event', name: 'back' })
  }

  const handleNext = (event) => {
    event.preventDefault()
    workflowApiGateway({ cmd: 'event', name: 'next' })
  }

  const handleInit = (event) => {
    event.preventDefault()
    workflowApiGateway({ cmd: 'start', name: 'firstFlow' })
  }
  if (result?.data) {
    const Component = process[result?.data?.flowName][result?.data?.stateName]
    if (Component) {
      return <Component handleNext={handleNext} handleBack={handleBack} />
    }
  } else {
    return <button onClick={handleInit}>Start</button>
  }
};

export default Workflow;
