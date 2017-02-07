describe('Mesaforte-ui RuleSet Add Demo App', function(){
	beforeAll(function() {
    	browser.get('http://localhost:8888/');
    	//browser.get('http://163.172.181.95:8888/');
    	expect(browser.getTitle()).toEqual('Mesaforte');
    	//element(by.model('login.username')).sendKeys('Support');
	    //element(by.model('login.passwd')).sendKeys('w4Support');
	    element(by.buttonText('Login')).click();
  	});

  	it('Testing a RuleSet Filter Results Functionality', function(){
  		//Filter Results
		expect(element(by.model('beanCtrl.gridOptions.quickFilterText')).isPresent()).toBe(true);
		element(by.model('beanCtrl.gridOptions.quickFilterText')).sendKeys('dent');
  	});

  	it('Testing a RuleSet Search Functionality', function(){
  		//Search
	    expect(element(by.model('beanCtrl.pages.category')).isPresent()).toBe(true);
	    element(by.model('beanCtrl.pages.category')).sendKeys('built-in');
	    element(by.buttonText('Search')).click();
  	});

  	it('Testing a RuleSet Add Button Functionality', function(){
  		//Add button
	    expect(element(by.buttonText('Add')).isPresent()).toBe(true);
	    element(by.buttonText('Add')).click();
  	});	

  	it('Testing a ruleset-tab-name Functionality', function(){
  		//ruleset-tab-name
	    expect(element(by.id('ruleset-tab-name')).isPresent()).toBe(true);
		element(by.id('ruleset-tab-name')).click();

		expect(element(by.model('rulesset.newBean.names[0].text')).isPresent()).toBe(true);
	    element(by.model('rulesset.newBean.names[0].text')).sendKeys('clientSettingsRule');

	   	expect(element(by.model('rulesset.newBean.category')).isPresent()).toBe(true);
	    element(by.model('rulesset.newBean.category')).sendKeys('built');

	    expect(element(by.model('rulesset.newBean.descriptions[0].text')).isPresent()).toBe(true);
	    element(by.model('rulesset.newBean.descriptions[0].text')).sendKeys('rules_desc');
  	});	

  	it('Testing a ruleset-tab-roles/users Functionality', function(){
  		//ruleset-tab-roles/users
		expect(element(by.id('ruleset-tab-roles/users')).isPresent()).toBe(true);
		element(by.id('ruleset-tab-roles/users')).click();
		
		expect(element(by.id('run roles checked')).isSelected());
		element(by.id('run roles checked')).sendKeys(true);	    
		
		expect(element(by.id('run users checked')).isSelected());
		element(by.id('run users checked')).sendKeys(true);
  	});

	it('Testing a ruleset-tab-security-audit-log Functionality', function(){
		//ruleset-tab-security-audit-log
		expect(element(by.id('ruleset-tab-security-audit-log')).isPresent()).toBe(true);
		element(by.id('ruleset-tab-security-audit-log')).click();

		expect(element(by.id('spandays')).isPresent()).toBe(true);
	    element(by.id('spandays')).sendKeys(2);

	    expect(element(by.id('spanMinutes')).isPresent()).toBe(true);
	    element(by.id('spanMinutes')).sendKeys(35);

	    expect(element(by.id('notifyType')).isPresent()).toBe(true);
	    element(by.id('notifyType')).sendKeys('Always');

	    expect(element(by.id('dynamiclog')).isPresent()).toBe(true);
	    element(by.id('dynamiclog')).sendKeys(true);

	    expect(element(by.id('automaticResponse')).isPresent()).toBe(true);
	    element(by.id('automaticResponse')).sendKeys(true);

	    expect(element(by.id('emailNotification')).isPresent()).toBe(true);
	    element(by.id('emailNotification')).sendKeys(true);

	    expect(element(by.id('rulesetowner')).isPresent()).toBe(true);
	    element(by.id('rulesetowner')).sendKeys('true');    
	});	

	it('Testing a ruleset-tab-filters Functionality', function(){
		//ruleset-tab-filters
	    expect(element(by.id('ruleset-tab-filters')).isPresent()).toBe(true);
		element(by.id('ruleset-tab-filters')).click();
			
		expect(element(by.id('filter-users')).isPresent()).toBe(true);
		element(by.id('filter-users')).click();

		expect(element(by.id('filter-roles')).isPresent()).toBe(true);
		element(by.id('filter-roles')).click();

		expect(element(by.id('filter-servers')).isPresent()).toBe(true);
		element(by.id('filter-servers')).click();
	});

	it('Testing a Save Button Functionality', function(){
		//element(by.buttonText('Save')).click();
	});

});
