/*****
 License
 --------------
 Copyright © 2017 Bill & Melinda Gates Foundation
 The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Gates Foundation organization for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.
 * Gates Foundation
 - Name Surname <name.surname@gatesfoundation.com>

 - Shashikant Hirugade <shashikant.hirugade@modusbox.com>
 --------------
 ******/

'use strict'

const rewire = require('rewire')
const Rx = require('rxjs')
const Sinon = require('sinon')
const should = require('chai').should()
const Expect = require('chai').expect
const Templates = require('../../../templates/index')

const TemplatesRewire = rewire('../../../templates/index')
const hasLoadTemplates = TemplatesRewire.__get__('loadTemplates')

describe('Templates unit tests (Index.js) : ', () => {

  var sandbox
  beforeEach(function () {
    // create a sandbox
    sandbox = Sinon.sandbox.create();
    // start stubbing stuff

  })

  afterEach(function () {
    // restore the environment as it was before
    sandbox.restore()
  })

  it(' getTemplateNamesByType should throw an error when incorrect path is given.', async () => {
    try {
      let result = await Templates.loadTemplates('/test', 'mustache')
    } catch (e) {
      Expect(e).to.be.an('error');
      return Promise.resolve()
    }
  })

  it(' loadTemplates should throw an error when incorrect path is given.', async () => {
    try {
      let result = await hasLoadTemplates('/test', 'mustache')
    } catch (e) {
      Expect(e).to.be.an('error');
      return Promise.resolve()
    }
  })

})
