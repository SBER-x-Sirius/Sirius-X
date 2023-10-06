const router = require('express').Router();

router.get('/attendance/users', (req, res) => {
  res.send(require('../json/users/success.json'));
});

const workflow = require('../json/workflow.json')
router.post('/workflow', (req, res) => {
  const { cmd, name } = req.query
  let flowName, stateName;
  if (cmd == 'start') {
    flowName = name
    if (!req.session.workflow) {
      req.session.workflow = {}
      req.session.workflow.flowName = name

      stateName = workflow['flows'][name]['init']
      req.session.workflow.stateName = stateName
    } else {
      flowName = req.session.workflow.flowName
      stateName = req.session.workflow.stateName
    }
  } else if (cmd == 'event') {
    const currentFlowName = req.session.workflow.flowName
    const currentStateName = req.session.workflow.stateName
    flowName = currentFlowName
    stateName = workflow['flows'][flowName]['events'][currentStateName][name]['newState']
    req.session.workflow.flowName = flowName
    req.session.workflow.stateName = stateName
  }

  console.log(req.session.workflow)

  res.send({ flowName, stateName })
})

module.exports = router;
