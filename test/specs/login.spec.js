//const { expect } = require('@wdio/globals')
const homeScreen = require('../screens/home.screen');
const loginScreen = require('../screens/login.screen');
const myStoreScreen = require('../screens/myStore.screen');

let user = 'gerente'
let user1 = 'lojaebacqe@gmail.com'
let password = "GD*peToHNJ1#c$sgk08EaYJQ"
let url1 = 'http://34.171.117.131/'
let url = 'http://lojaebac.ebaconline.art.br/' 


describe('Access Admin Panel', () => {
    it( 'Should login with valid credentials', async() => {
 
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(url)        
        await loginScreen.btnContinue()
        await loginScreen.login(user1,password)
        await loginScreen.goToTwoFactorPasswordBtn()
        await loginScreen.twoFactorPasswod(password)

        expect(await myStoreScreen.getMyStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')


    });
})