import KeySystemPlayReady from '../../src/streaming/protection/drm/KeySystemPlayReady.js';

const expect = require('chai').expect;

describe('KeySystemPlayready', function () {

    let keySystem;
    let cdmData = null;

    const protData = {
        cdmData: '2lfuDn3JoEo0dM324cA5tSv1gNNw65mgysBqNJqtxGUk7ShUOE03N6LK0cryu2roCQtDghmF7cC6xyt1WTA86CmrUNFRjo1tcxQtTVEW9Xw68pH7/yU2GbtK4zbctx49sffi4fYy8fGEUB5079CesBONxoKli5j2ADM8CWz93a5mYegZWraOq3EH0nvwvRXZ'
    };

    const expectedCDMData = '<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="false"><CustomData encoding="base64encoded">MgBsAGYAdQBEAG4AMwBKAG8ARQBvADAAZABNADMAMgA0AGMAQQA1AHQAUwB2ADEAZwBOAE4AdwA2ADUAbQBnAHkAcwBCAHEATgBKAHEAdAB4AEcAVQBrADcAUwBoAFUATwBFADAAMwBOADYATABLADAAYwByAHkAdQAyAHIAbwBDAFEAdABEAGcAaABtAEYANwBjAEMANgB4AHkAdAAxAFcAVABBADgANgBDAG0AcgBVAE4ARgBSAGoAbwAxAHQAYwB4AFEAdABUAFYARQBXADkAWAB3ADYAOABwAEgANwAvAHkAVQAyAEcAYgB0AEsANAB6AGIAYwB0AHgANAA5AHMAZgBmAGkANABmAFkAeQA4AGYARwBFAFUAQgA1ADAANwA5AEMAZQBzAEIATwBOAHgAbwBLAGwAaQA1AGoAMgBBAEQATQA4AEMAVwB6ADkAMwBhADUAbQBZAGUAZwBaAFcAcgBhAE8AcQAzAEUASAAwAG4AdgB3AHYAUgBYAFoA</CustomData></LicenseAcquisition></PlayReadyCDMData>';

    const context = {};

    it('should exist', () => {
        expect(KeySystemPlayReady).to.exist; // jshint ignore:line
    });

    keySystem = KeySystemPlayReady(context).getInstance();
    keySystem.init(protData);
    cdmData = keySystem.getCDMData();

    it('should return the correct cdmData', function () {
        expect(keySystem).to.be.defined; // jshint ignore:line
        expect(cdmData).to.be.not.null; // jshint ignore:line
        expect(cdmData).to.be.instanceOf(ArrayBuffer);
        var cdmDataString = String.fromCharCode.apply(null, new Uint16Array(cdmData));
        expect(cdmDataString).to.equal(expectedCDMData);
    });

});