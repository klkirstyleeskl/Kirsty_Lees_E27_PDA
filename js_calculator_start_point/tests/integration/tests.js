var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have number buttons update the display', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('23')
  })

  it('should have arithmetical functions update the display_Add', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('should have arithmetical functions update the display_Subtract', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have arithmetical functions update the display_Divide', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have arithmetical functions update the display_Multiply', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  })

  it('should have arithmetical functions chained together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('21')
  })



});
