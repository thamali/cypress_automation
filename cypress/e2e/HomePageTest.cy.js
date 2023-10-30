import HomePageFunc from "../PageObjects/HomePage"
import LandingPageFunc from "../PageObjects/LandingPage"

describe('HomePageTest',()=>{

    let objlandingpage
    let objhomepage
    let userdata

    before(()=>{

        cy.fixture("soltia").then((data)=>{

          userdata=data;
        })
        objlandingpage= new LandingPageFunc()
        objhomepage = new HomePageFunc()    

    })

    
    
    beforeEach(()=>{

        cy.launchApp(userdata.url)
        cy.get(objlandingpage.NavArrow).click() //Click on Landing Page Arrow 

    })

   it('VerifyHomePageLaunch',()=>{
    //Assertion for home page 
    
    cy.get(objhomepage.LnkHome).should('be.visible') 

   })

   it('VerifyLanguageDropdown',()=>{

   cy.get(objhomepage.textLanguage).should('have.text','Swe')
    

   })

   it.only('VerifyLanguageselection',()=>{
    
    cy.get(objhomepage.DrpdwnLanguage).click()// click on the language dropdown
    cy.get(objhomepage.MenuItemNotSelected_Language).click()
    cy.get(objhomepage.DrpdwnLanguageAfterSelection).should('have.text','Eng').screenshot('verifyLanguage')
 //   cy.get(objhomepage.DrpdwnLanguageAfterSelection).screenshot("verifyLanguage")
    
   })




})