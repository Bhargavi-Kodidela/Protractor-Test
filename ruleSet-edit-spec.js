describe('Mesaforte-ui RuleSet Edit Demo App', function(){

	it('Testing a Ruleset Edit Button Functionality', function(){
		 browser.setLocation('/home/plan/ruleset/2');
	});

	it('Testing a ruleset-edited-tab-name Functionality', function(){
		//ruleset-edited-tab-name
  		expect(element(by.id('ruleset-edited-tab-name')).isPresent()).toBe(true);
		element(by.id('ruleset-edited-tab-name')).click();

	    expect(element(by.model('rulesset.editedBean.names_lang[rulesset.currentLang]')).isPresent()).toBe(true);
	    element(by.model('rulesset.editedBean.names_lang[rulesset.currentLang]')).sendKeys('R');

	   	expect(element(by.model('rulesset.editedBean.category')).isPresent()).toBe(true);
	    element(by.model('rulesset.editedBean.category')).sendKeys('1');

	    expect(element(by.model('rulesset.editedBean.descriptions_lang[rulesset.currentLang]')).isPresent()).toBe(true);
	    element(by.model('rulesset.editedBean.descriptions_lang[rulesset.currentLang]')).sendKeys('S');
	});

	it('Testing a ruleset-edited-tab-rules Functionality', function(){
		//ruleset-edited-tab-rules
	    expect(element(by.id('ruleset-edited-tab-rules')).isPresent()).toBe(true);
		element(by.id('ruleset-edited-tab-rules')).click();
	});

	it('Testing a ruleset-edited-tab-filters Functionality', function(){
		//ruleset-edited-tab-filters
		expect(element(by.id('ruleset-edited-tab-filters')).isPresent()).toBe(true);
		element(by.id('ruleset-edited-tab-filters')).click();

		//sub-filters-users
		expect(element(by.id('edited-tab-filters-users')).isPresent()).toBe(true);
		element(by.id('edited-tab-filters-users')).click();

		expect(element(by.model('filter.included')).isPresent()).toBe(true);
		element(by.model('filter.included')).click();

		//sub-filters-roles
		expect(element(by.id('edited-tab-filters-roles')).isPresent()).toBe(true);
		element(by.id('edited-tab-filters-roles')).click();

		/*expect(element(by.model('filter.included')).isPresent()).toBe(true);
		element(by.model('filter.included')).click();*/

		//sub-filters-servers
		expect(element(by.id('edited-tab-filters-servers')).isPresent()).toBe(true);
		element(by.id('edited-tab-filters-servers')).click();

		expect(element(by.id('server-filters')).isPresent()).toBe(true);
		element(by.id('server-filters')).sendKeys(2);

	});

	it('Testing a ruleset-edited-tab-ownership Functionality', function(){
		//ruleset-edited-tab-ownership
		expect(element(by.id('ruleset-edited-tab-ownership')).isPresent()).toBe(true);
		element(by.id('ruleset-edited-tab-ownership')).click();

		expect(element(by.model('rulesset.editedBean.ownedBy')).isPresent()).toBe(true);
		element(by.model('rulesset.editedBean.ownedBy')).sendKeys('Incident-Manager');
	});	

	it('Testing a ruleset-edited-tab-notification Functionality', function(){	
		//ruleset-edited-tab-notification
		expect(element(by.id('ruleset-edited-tab-notification')).isPresent()).toBe(true);
		element(by.id('ruleset-edited-tab-notification')).click();

		expect(element(by.id('notifyType')).isPresent()).toBe(true);
	    element(by.id('notifyType')).sendKeys('Always');

	    expect(element(by.id('automaticResponse')).isPresent()).toBe(true);
	    element(by.id('automaticResponse')).sendKeys(true);

	    expect(element(by.id('emailNotification')).isPresent()).toBe(true);
	    element(by.id('emailNotification')).sendKeys(true);
	});	
  	it('Testing a ruleset-edited-tab-parameters Functionality', function(){		
	    //ruleset-edited-tab-parameters
		expect(element(by.id('ruleset-edited-tab-parameters')).isPresent()).toBe(true);
		element(by.id('ruleset-edited-tab-parameters')).click();

		expect(element(by.id('spandays')).isPresent()).toBe(true);
	    element(by.id('spandays')).sendKeys(2);

	    expect(element(by.id('spanMinutes')).isPresent()).toBe(true);
	    element(by.id('spanMinutes')).sendKeys('');

	    expect(element(by.id('runagainstroles')).isPresent()).toBe(true);
	    element(by.id('runagainstroles')).sendKeys(true);

	    expect(element(by.id('dynamiclog')).isPresent()).toBe(true);
	    element(by.id('dynamiclog')).sendKeys(true);

	    expect(element(by.id('runagainstusers')).isPresent()).toBe(true);
	    element(by.id('runagainstusers')).sendKeys(true);
  	});
  	it('Testing a Update Button Functionality', function(){
  		 //element(by.buttonText('Update')).click();
  	});
});