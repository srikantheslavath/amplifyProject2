

describe('GraphQL API Testing', () => {
    it('should return list of todos', () => {
      cy.fixture('ListTodo.graphql').then((graphqlQuery) => {
        cy.fixture('ListTodo.json').then((variables) => {
          cy.request({
            method: 'POST',
            url: 'https://mwdpovh6ejdqdhucxmx7p43vrq.appsync-api.us-east-1.amazonaws.com/graphql',
            headers: {
              'X-Api-Key': 'da2-g5px4lnq3bdzxjue4dufijqmxu'
            },
            body: {
              query: graphqlQuery,
              variables: variables
            }
          }).then(response => {
            let body=JSON.parse(JSON.stringify(response.body));
            cy.log(response.body); 
            cy.writeFile('response.json', response.body);
            expect(response.status).to.eq(200);
            console.log(response.body); 
          });
        });
      });
    });

    it('Create todos', () => {
      cy.fixture('createTodo.graphql').then((graphqlQuery) => {
        cy.fixture('createTodo.json').then((variables) => {
          cy.request({
            method: 'POST',
            url: 'https://mwdpovh6ejdqdhucxmx7p43vrq.appsync-api.us-east-1.amazonaws.com/graphql',
            headers: {
              'X-Api-Key': 'da2-g5px4lnq3bdzxjue4dufijqmxu'
            },
            body: {
              query: graphqlQuery,
              variables: variables
            }
          }).then(response => {
            cy.log(response.body); 
            cy.writeFile('response.json', response.body);
            expect(response.status).to.eq(200);
            console.log(response); 
          });
        });
      });
    });

  });