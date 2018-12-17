export function isRootJail() {
    console.log('iOS is jailbroken: ', DTTJailbreakDetection.isJailbroken());
    return DTTJailbreakDetection.isJailbroken();
}