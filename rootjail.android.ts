import * as application from "tns-core-modules/application";

export function isRootJail() {
    const rootBeer = new com.scottyab.rootbeer.RootBeer(application.android.context);
    console.log('Android is rooted: ', rootBeer.isRooted());
    return rootBeer.isRooted();
}
