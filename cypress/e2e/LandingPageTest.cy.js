import LandingPageFunc from "../PageObjects/LandingPage"

describe('LandingPageTest',()=>{
    
   let objlandingpage;
   let userdata;

   before(()=>{

      cy.fixture("soltia").then((data)=>{

         userdata=data;
       })

      objlandingpage = new LandingPageFunc()

   })
  
    beforeEach(()=>{

       objlandingpage = new LandingPageFunc()

    })

    it('verifyPageLaunch',()=>{

     cy.launchApp(userdata.url)
     cy.title().should('eq',objlandingpage.texttitle)
     cy.get(objlandingpage.NavArrow).should('be.visible')
     
     
})
 


})