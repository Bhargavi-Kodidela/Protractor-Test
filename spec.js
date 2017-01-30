describe('Mesaforte-ui Demo App', function(){
	beforeEach(function() {
    	browser.get('http://localhost:8888/');
    	expect(browser.getTitle()).toEqual('Mesaforte');
    	//element(by.model('login.username')).sendKeys('Support');
	    //element(by.model('login.passwd')).sendKeys('w4Support');
	    element(by.buttonText('Login')).click();

  	});

	it('Teting a Add Button', function(){
		//browser.ignoreSynchronization = false;

		//browser.wait(element(by.css(".topnavbar")).isPresent());
		//Filter Results
		expect(element(by.model('beanCtrl.gridOptions.quickFilterText')).isPresent()).toBe(true);
		element(by.model('beanCtrl.gridOptions.quickFilterText')).sendKeys('dent');
		//Search
	   /* expect(element(by.model('beanCtrl.pages.category')).isPresent()).toBe(true);
	    element(by.model('beanCtrl.pages.category')).sendKeys('built-in');
	    element(by.buttonText('Search')).click();*/

	    //Add button
	    expect(element(by.buttonText('Add')).isPresent()).toBe(true);
	    element(by.buttonText('Add')).click();
	    //ruleset-tab-name
	    expect(element(by.id('ruleset-tab-name')).isPresent()).toBe(true);
		element(by.id('ruleset-tab-name')).click();

	    expect(element(by.model('rulesset.newBean.names_lang[vm.currentLang].text')).isPresent()).toBe(true);
	    element(by.model('rulesset.newBean.names_lang[vm.currentLang].text')).sendKeys('clientSettingsRule');

	   	expect(element(by.model('rulesset.newBean.category')).isPresent()).toBe(true);
	    element(by.model('rulesset.newBean.category')).sendKeys('built');

	    //ruleset-tab-roles/users
		expect(element(by.id('ruleset-tab-roles/users')).isPresent()).toBe(true);
		element(by.id('ruleset-tab-roles/users')).click();

		expect(element(by.id('run roles checked')).isSelected());
		element(by.id('run roles checked')).sendKeys(true);	    

		expect(element(by.id('run users checked')).isSelected());
		element(by.id('run users checked')).sendKeys(true);

		//ruleset-tab-security-audit-log
		expect(element(by.id('ruleset-tab-security-audit-log')).isPresent()).toBe(true);
		element(by.id('ruleset-tab-security-audit-log')).click();

		expect(element(by.id('spandays')).isPresent()).toBe(true);
	    element(by.id('spandays')).sendKeys(2);

	    expect(element(by.id('spanMinutes')).isPresent()).toBe(true);
	    element(by.id('spanMinutes')).sendKeys(35);

	    expect(element(by.id('notyfyType')).isPresent()).toBe(true);
	    element(by.id('notyfyType')).sendKeys('Always');

	    expect(element(by.id('dynamiclog')).isPresent()).toBe(true);
	    element(by.id('dynamiclog')).sendKeys(true);

	    expect(element(by.id('automaticResponse')).isPresent()).toBe(true);
	    element(by.id('automaticResponse')).sendKeys(true);

	    expect(element(by.id('emailNotification')).isPresent()).toBe(true);
	    element(by.id('emailNotification')).sendKeys(true);

	    expect(element(by.id('rulesetowner')).isPresent()).toBe(true);
	    element(by.id('rulesetowner')).sendKeys('true');

	    //ruleset-tab-filters
	    expect(element(by.id('ruleset-tab-filters')).isPresent()).toBe(true);
		element(by.id('ruleset-tab-filters')).click();

		expect(element(by.id('filter-users')).isPresent()).toBe(true);
		element(by.id('filter-users')).click();

		expect(element(by.id('filter-roles')).isPresent()).toBe(true);
		element(by.id('filter-roles')).click();

		expect(element(by.id('filter-servers')).isPresent()).toBe(true);
		element(by.id('filter-servers')).click();

	   	//element(by.buttonText('Save')).click();
	    

		/*browser.driver.wait(function() {
            return element(by.css('topnavbar')).isDisplayed().then(function(IsVisible) {
                return IsVisible;
            });
        }, 10000);*/

	});

});
