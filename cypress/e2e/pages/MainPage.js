class MainPage {
    get selectors() {
      return {
        header: '.header',
        footer: '.footer',
        homeContainer: '.home',
        runningString: '.tapes',
        map: '.map',
        expeditionBlock: '.expeditions',
        newsBlock: '.news'
      };
    }
  
    navigate() {
      cy.visit('https://1000and1songs.com/#/');
    }
  
    validateHttps() {
      cy.location('protocol').should('eq', 'https:');
    }
  
    validateHeader() {
      cy.get(this.selectors.header).should('be.visible');
    }
  
    validateFooter() {
      cy.get(this.selectors.footer).should('be.visible');
    }
  
    validateHomeContainer() {
      cy.get(this.selectors.homeContainer).should('be.visible');
      cy.contains(this.selectors.homeContainer, '1000 і 1 пісня').should('be.visible');
      cy.contains(this.selectors.homeContainer, 'У нас зібрані українські традиційні пісні різних жанрів з усіх регіонів. Популяризуймо Україну разом').should('be.visible');
      cy.contains(this.selectors.homeContainer, 'Підтримати проєкт').should('be.visible');
      cy.contains(this.selectors.homeContainer, 'Поділитись сайтом').should('be.visible');
    }
  
    validateRunningString() {
      cy.get(this.selectors.runningString).should('be.visible');
    }
  
    validateMap() {
      cy.get(this.selectors.map).should('be.visible');
    }
  
    validateExpeditionBlock() {
      cy.get(this.selectors.expeditionBlock).should('be.visible');
      cy.contains(this.selectors.expeditionBlock, 'Переглянути').should('be.visible');
      cy.contains(this.selectors.expeditionBlock, 'Переглянути усі').should('be.visible');
    }
  
    validateNewsBlock() {
      cy.get(this.selectors.newsBlock).should('be.visible');
      cy.contains(this.selectors.newsBlock, 'Новини').should('be.visible');
      cy.contains(this.selectors.newsBlock, 'Переглянути усі').should('be.visible');
    }
  }
  
  export default MainPage;
  









// class MainPage {
//     navigate() {
//         cy.visit('https://1000and1songs.com/#/');
//     }
//     validateHttps() {
//         cy.location('protocol').should('eq', 'https:');
//     }
//     validateHeader() {
//         cy.get('.header').should('be.visible');
//     }
//     validateFooter() {
//         cy.get('.footer').should('be.visible');
//     }
//     validateHomeContainer() {
//         cy.get('.home').should('be.visible');
//         cy.contains('.home', '1000 і 1 пісня').should('be.visible');
//         cy.contains('.home', 'У нас зібрані українські традиційні пісні різних жанрів з усіх регіонів. Популяризуймо Україну разом').should('be.visible');
//         cy.contains('.home', 'Підтримати проєкт').should('be.visible');
//         cy.contains('.home', 'Поділитись сайтом').should('be.visible');
//     }
//     validateRunningString() {
//         cy.get('.tapes').should('be.visible');
//     }
//     validateMap() {
//         cy.get('.map').should('be.visible');
//     }
//     validateExpeditionBlock() {
//         cy.get('.expeditions').should('be.visible');
//         cy.contains('.expeditions', 'Переглянути').should('be.visible');
//         cy.contains('.expeditions', 'Переглянути усі').should('be.visible');
//     }
//     validateNewsBlock() {
//         cy.get('.news').should('be.visible');
//         cy.contains('.news', 'Новини').should('be.visible');
//         cy.contains('.news', 'Переглянути усі').should('be.visible');
//     }
// }
// export default MainPage;