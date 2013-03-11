describe('isEmail', function()
{
	it('checks if the given value is a valid email address', function()
	{
		expect(isEmail('lowiebenoot@domain.tld')).toEqual(true);
		expect(isEmail('lowie.benoot@domain.tld')).toEqual(true);
		expect(isEmail('lowiebenoot+something@tld.com')).toEqual(true);
		expect(isEmail('test')).toEqual(false);
	});
});