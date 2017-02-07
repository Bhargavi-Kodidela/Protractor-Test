describe('Mesaforte-ui Rule Edit Demo App', function(){
	it('Testing a Rule Edit Button Functionality', function(){
		browser.setLocation('/home/plan/rules/clientSettingsRule/3');
	});	

	it('Testing a rule-tab-ruleInfo Functionality', function(){
		//rule-tab-ruleInfo
		expect(element(by.id('rule-tab-ruleInfo')).isPresent()).toBe(true);
		element(by.id('rule-tab-ruleInfo')).click();

		expect(element(by.model('rules.editedBean.ruleID')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.ruleID')).sendKeys('1');

		expect(element(by.model('rules.editedBean.criticality')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.criticality')).sendKeys('HIGH');

		expect(element(by.model('rules.editedBean.descriptions[0].text')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.descriptions[0].text')).sendKeys('Desc');

		expect(element(by.model('rules.editedBean.providedOwners')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.providedOwners')).sendKeys('appl');

		expect(element(by.model('rules.editedBean.entityType.name')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.entityType.name')).sendKeys('rules');

	});	
	it('Testing a rule-tab-summary Functionality', function(){
		//rule-tab-summary
		expect(element(by.id('rule-tab-summary')).isPresent()).toBe(true);
		element(by.id('rule-tab-summary')).click();

		expect(element(by.model('rules.editedBean.clientType')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.clientType')).sendKeys('a1');

		expect(element(by.model('rules.newElement.settingName')).isPresent()).toBe(true);
		element(by.model('rules.newElement.settingName')).sendKeys('clientTypes');

		expect(element(by.model('rules.newElement.recommendedValue')).isPresent()).toBe(true);
		element(by.model('rules.newElement.recommendedValue')).sendKeys('2');
		//element(by.buttonText('Add')).click();
		//element(by.buttonText('Update')).click();
	});

	it('Testing a rule-tab-risk Functionality', function(){
		//rule-tab-risk
		expect(element(by.id('rule-tab-risk')).isPresent()).toBe(true);
		element(by.id('rule-tab-risk')).click();

		expect(element(by.model('rules.editedBean.risk.types[0].text')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.risk.types[0].text')).sendKeys('ee');

		expect(element(by.model('rules.editedBean.risk.names[0].text')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.risk.names[0].text')).sendKeys('names');

		expect(element(by.model('rules.editedBean.risk.descriptions[0].text')).isPresent()).toBe(true);
		element(by.model('rules.editedBean.risk.descriptions[0].text')).sendKeys('descp');

		expect(element(by.id('riskOwner')).isPresent()).toBe(true);
		element(by.id('riskOwner')).sendKeys('Application Owner');
	});

	it('Testing a rule-tab-mitigation Functionality', function(){
		//rule-tab-mitigation
		expect(element(by.id('rule-tab-mitigation')).isPresent()).toBe(true);
		element(by.id('rule-tab-mitigation')).click();

		expect(element(by.id('rules.mc.owner')).isPresent()).toBe(true);
		element(by.id('rules.mc.owner')).sendKeys(true);

		expect(element(by.model('rules.mitigationControl.name.type.types[0].text')).isPresent()).toBe(true);
	    element(by.model('rules.mitigationControl.name.type.types[0].text')).sendKeys('System configuration');

	    expect(element(by.model('rules.mitigationControl.name.names[0].text')).isPresent()).toBe(true);
		element(by.model('rules.mitigationControl.name.names[0].text')).sendKeys(true);

		expect(element(by.id('mcdesc')).isPresent()).toBe(true);
		element(by.id('mcdesc')).sendKeys(true);

		/*expect(element(by.id('mcowner')).isPresent()).toBe(true);
		element(by.id('mcowner')).sendKeys(false);
		/*
		expect(element(by.id('mcattach')).isPresent()).toBe(true);
		element(by.id('mcattach')).click();*/

		var path = require('path');
		// Select image
		var fileToUpload = 'Screenshot from 2017-01-17 12:28:48.png'
		  , absolutePath = path.resolve(__dirname, fileToUpload);

		element(by.xpath('//input[@type="file"]')).sendKeys(absolutePath);
		console.log(absolutePath);
		element(by.css('[ng-click="rules.mitigationUpdate()"]'));

		//element(by.buttonText('Update')).click();rules.mitigationUpdate()
		element(by.css('[ng-click="rules.mitigationUpdate()"]'));
		element(by.css('[ng-click="rules.downloadFile()"]'));
	});

	it('Testing a Update Button Functionality', function(){
		//element(by.buttonText('Duplicate')).click();
		//element(by.css('[ng-click="rules.duplicateRule()"]'));
	});
});