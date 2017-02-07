describe('Mesaforte-ui Rule Add Demo App', function(){
	it('Testing a Rule Add Button Functionality', function(){
		browser.setLocation('/home/plan/rules/clientSettingsRule');
	});	

	it('Testing a Rule Search Button Functionality', function(){
		//Search
		expect(element(by.model('beanCtrl.pages.ruleID')).isPresent()).toBe(true);
	    element(by.model('beanCtrl.pages.ruleID')).sendKeys('conf/clset/0003564');
	    element(by.buttonText('Search')).click();
	});	

	it('Testing a Rule Filter Results Functionality', function(){
		//Filter Results
		expect(element(by.model('beanCtrl.gridOptions.quickFilterText')).isPresent()).toBe(true);
		element(by.model('beanCtrl.gridOptions.quickFilterText')).sendKeys('dent');
	});	

	it('Testing a Rule Add Button Functionality', function(){
		//Add Button
	    expect(element(by.buttonText('Add')).isPresent()).toBe(true);
	    element(by.buttonText('Add')).click();
	});	
	
	it('Testing a Rule Fields Functionality', function(){

	    expect(element(by.model('rules.newBean.ruleID')).isPresent()).toBe(true);
		element(by.model('rules.newBean.ruleID')).sendKeys('12');

		expect(element(by.id('category')).isSelected());
		element(by.id('category')).sendKeys(true);

		expect(element(by.model('rules.newBean.criticality')).isPresent()).toBe(true);
		element(by.model('rules.newBean.criticality')).sendKeys('HIGH');

		expect(element(by.model('rules.newBean.risk.typeKey')).isPresent()).toBe(true);
		element(by.model('rules.newBean.risk.typeKey')).sendKeys('riskType');

		expect(element(by.model('rules.newBean.risk.nameKey')).isPresent()).toBe(true);
		element(by.model('rules.newBean.risk.nameKey')).sendKeys('riskName');

		expect(element(by.model('rules.newBean.risk.descriptionKey')).isPresent()).toBe(true);
		element(by.model('rules.newBean.risk.descriptionKey')).sendKeys('riskDesc');

		expect(element(by.model('rules.newBean.providedBy')).isPresent()).toBe(true);
		element(by.model('rules.newBean.providedBy')).sendKeys('Wikima4');

		expect(element(by.model('rules.newBean.providedOwners')).isPresent()).toBe(true);
		element(by.model('rules.newBean.providedOwners')).sendKeys('rules');

		expect(element(by.model('rules.newBean.names[0].text')).isPresent()).toBe(true);
		element(by.model('rules.newBean.names[0].text')).sendKeys('key');

		expect(element(by.model('rules.newBean.descriptions[0].text')).isPresent()).toBe(true);
		element(by.model('rules.newBean.descriptions[0].text')).sendKeys('riskDesc');

		expect(element(by.model('rules.newBean.clientType')).isPresent()).toBe(true);
		element(by.model('rules.newBean.clientType')).sendKeys('Z');
	});

	it('Testing a Save Button Functionality', function(){
		//element(by.buttonText('Add')).click();
		//element(by.id('button')).click();
	});	
});