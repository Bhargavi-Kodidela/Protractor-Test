describe('Mesaforte-ui Filterson-Users Add Demo App', function(){

	it('Testing a Filterson-Users Add Button Functionality', function(){
		browser.setLocation('/home/plan/filterson/user/10');
	});
		
	it('Testing a Filterson-Users Add Button Functionality', function(){

		/*expect(element(by.buttonText('Add')).isPresent()).toBe(true);
	    element(by.css('[ng-click="beanCtrl.addBean()"]')).click();*/
	    
	    expect(element(by.model('sapfilterctrl.editedBean.category')).isPresent());
	    element(by.model('sapfilterctrl.editedBean.category')).sendKeys('true');

	    expect(element(by.model('sapfilterctrl.editedBean.names[0].text')).isPresent()).toBe(true);
	    element(by.model('sapfilterctrl.editedBean.names[0].text')).sendKeys('user');
		
		/*expect(element(by.id('filterTypeSelect')).isPresent()).toBe(true);
	    element(by.id('filterTypeSelect')).sendKeys(true);
*/
	    expect(element(by.id('idmUser')).isPresent()).toBe(true);
	    element(by.id('idmUser')).sendKeys('New WD1');

	    expect(element(by.model('sapfilterctrl.editedBean.descriptions[0].text')).isPresent());
	    element(by.model('sapfilterctrl.editedBean.descriptions[0].text')).sendKeys('true1');


	});
});		