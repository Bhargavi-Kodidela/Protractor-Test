describe('Mesaforte-ui Demo App', function(){
	beforeEach(function() {
    	//browser.get('http://localhost:8888/#/home/plan/ruleset/2');
    	//expect(browser.getTitle()).toEqual('Mesaforte');
    	//element(by.buttonText('Login')).click();
  	});
  	it('Ruleset Editing', function(){

  		//Search
	    expect(element(by.model('beanCtrl.pages.category')).isPresent()).toBe(true);
	    element(by.model('beanCtrl.pages.category')).sendKeys('built-in');
	    element(by.buttonText('Search')).click();

	   /* expect(element(by.css('.ag-cell ag-cell-not-inline-editing ag-cell-value ag-cell-no-focus')).isPresent()).toBe(false);
	    element(by.css('.ag-cell ag-cell-not-inline-editing ag-cell-value ag-cell-no-focus')).click();
  		//ruleset-edited-tab-name
  		expect(element(by.id('ruleset-edited-tab-name')).isPresent()).toBe(true);
		element(by.id('ruleset-edited-tab-name')).click();

	    expect(element(by.model('rulesset.editedBean.names_lang[rulesset.currentLang]')).isPresent()).toBe(true);
	    element(by.model('rulesset.editedBean.names_lang[rulesset.currentLang]')).sendKeys('clientSettingsRules');

	   	expect(element(by.model('rulesset.editedBean.category')).isPresent()).toBe(true);
	    element(by.model('rulesset.editedBean.category')).sendKeys('built-in');

	    expect(element(by.model('rulesset.editedBean.descriptions_lang[rulesset.currentLang]')).isPresent()).toBe(true);
	    element(by.model('rulesset.editedBean.descriptions_lang[rulesset.currentLang]')).sendKeys('something');
	    */
  	});
});