/*  HOT observeable is the topicObservable
    COLD are the rest observables */

// const marbles = require('rxjs-marbles/tape').marbles
const Sinon = require('sinon')
const Test = require('tapes')(require('tape'))
const Setup = require('../../src/setup').setup
const Kafka = require('../../src/lib/kafka')
const KafkaConsumer = require('@mojaloop/central-services-stream').Kafka.Consumer
const Rx = require('rxjs')
Test('Test the action observables Setup', setupTest => {
  /* let mockMessage = {}

  const inputs = {
    a: mockMessage,
    b: {}
  }

  const source = m.hot('--^-a-b-|', inputs)
  const subs =           '^-----!'
  */
  let sandbox
  let ConsumerStub
  let UtilityStub
  let LoggerStub
  let RxStub
  let filterStub
  let switchMapStub
  let ObservablesStub
  let healthcheckStub

  setupTest.beforeEach(t => {
    sandbox = Sinon.createSandbox()
    sandbox.stub(KafkaConsumer.prototype, 'constructor').resolves()
    sandbox.stub(KafkaConsumer.prototype, 'connect').resolves()
    sandbox.stub(KafkaConsumer.prototype, 'consume').resolves()
    sandbox.stub(KafkaConsumer.prototype, 'commitMessageSync').resolves()
    sandbox.stub(Kafka.Consumer, 'getConsumer').returns({
      commitMessageSync: async function () { return true }
    })
    sandbox.stub(Rx.prototype, 'Observable')
  })
})
