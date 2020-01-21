const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const {I} = inject();

Feature ('People');

Scenario('Verify a successful call', async (I) => {
    let res = await I.sendGetRequest('/api/people/1');
    expect(res).to.have.status(200);
})

Scenario('Verify the returned data of a person', async (I) => {
    let res = await I.sendGetRequest('/api/people/1');
    expect(res.data.name).to.eql('Luke Skywalker');
    expect(res.data.height).to.eql('172');
    expect(res.data.mass).to.eql('77');
    expect(res.data.hair_color).to.eql('blond');
    expect(res.data.skin_color).to.eql('fair');
    expect(res.data.eye_color).to.eql('blue');
    expect(res.data.birth_year).to.eql('19BBY');
    expect(res.data.gender).to.eql('male');
})
