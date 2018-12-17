"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
function isRootJail() {
    var rootBeer = new com.scottyab.rootbeer.RootBeer(application.android.context);
    console.log('Android is rooted: ', rootBeer.isRooted());
    return rootBeer.isRooted();
}
exports.isRootJail = isRootJail;
//# sourceMappingURL=rootjail.android.js.map