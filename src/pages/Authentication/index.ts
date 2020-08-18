import { assets as onBoardingAssets } from './OnBoarding';
import { assets as welcomeAssets } from './Welcome';

export { default as Welcome } from './Welcome';
export { default as OnBoarding } from './OnBoarding';

export const assets = [...onBoardingAssets, ...welcomeAssets];
