const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const {I} = inject();

Feature ('Planets');

Scenario('Verify a successful call', async (I) => {
    let res = await I.sendGetRequest('/api/planets/1');
    expect(res).to.have.status(200);
})

Scenario('Verify the returned data of a planet', async (I) => {
    let res = await I.sendGetRequest('/api/planets/1');
    expect(res.data.name).to.eql('Tatooine');
    expect(res.data.rotation_period).to.eql('23');
    expect(res.data.orbital_period).to.eql('304');
    expect(res.data.diameter).to.eql('10465');
    expect(res.data.climate).to.eql('arid');
    expect(res.data.gravity).to.eql('1 standard');
    expect(res.data.terrain).to.eql('desert');
    expect(res.data.surface_water).to.eql('1');
    expect(res.data.population).to.eql('200000');
})