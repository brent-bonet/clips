describe('My First Test', () => {
  it('Sanity test', () => {
    cy.visit('/');
    cy.contains('text-3xl text-indigo-400 font-bold uppercase mr-4', 'Clips');
  });
});
