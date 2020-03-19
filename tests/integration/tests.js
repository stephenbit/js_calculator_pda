const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });


  it('should display the number 3 when button 3 is pressed', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('should be able to update the display with 4', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click()

    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

it('can chain multiple operations and return the correct result of 9', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click()
  element(by.css('#number3')).click()
  element(by.css('#operator_add')).click()
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('9')
})

  it('should return -2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-2')
  })

  it('it should display a decimal number (2.5)', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
  })

  it('it should display large numbers (99999980000001) ', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('99999980000001')
  })

  it('should display err if dividing by 0', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#number7')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('err')
  })

});
