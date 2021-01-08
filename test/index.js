import mocha from 'mocha'
import chai from 'chai'
import {ObjectType} from '../src'

const describe = mocha.describe
const it = mocha.it
const expect = chai.expect
chai.should()

describe('vue-utils', function () {
    describe('unit tests', function () {
        describe('install', function () {
            it('install without options', function (done) {
                const input = {}
                expect(ObjectType.is(input)).to.be.true

                done()
            })
        })
    })
})