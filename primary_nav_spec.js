describe('Mesaforte-ui menu_icon Demo App', function(){

	it('Testing a image menu_icon Functionality', function(){
		browser.setLocation('/home/plan/ruleset');
		
		expect(element(by.xpath("//img[@ src='img/menu_icon.png']")).isPresent()).toBe(true);
		element(by.xpath("//img[@ src='img/menu_icon.png']")).click();
		//element(by.css('[ng-click="master.openSideMenu = !master.openSideMenu"]')).click();
		//element(by.id('img1')).click();

	});
});		