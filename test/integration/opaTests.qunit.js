/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["naruto/github/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
