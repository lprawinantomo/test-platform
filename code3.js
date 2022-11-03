gdjs.GameEndCode = {};
gdjs.GameEndCode.GDCloudObjects1= [];
gdjs.GameEndCode.GDCloudObjects2= [];
gdjs.GameEndCode.GDPlayerObjects1= [];
gdjs.GameEndCode.GDPlayerObjects2= [];
gdjs.GameEndCode.GDGrassPlatformObjects1= [];
gdjs.GameEndCode.GDGrassPlatformObjects2= [];
gdjs.GameEndCode.GDSmallBridgeObjects1= [];
gdjs.GameEndCode.GDSmallBridgeObjects2= [];
gdjs.GameEndCode.GDCoinObjects1= [];
gdjs.GameEndCode.GDCoinObjects2= [];
gdjs.GameEndCode.GDScoreObjects1= [];
gdjs.GameEndCode.GDScoreObjects2= [];
gdjs.GameEndCode.GDLeftObjects1= [];
gdjs.GameEndCode.GDLeftObjects2= [];
gdjs.GameEndCode.GDRightObjects1= [];
gdjs.GameEndCode.GDRightObjects2= [];
gdjs.GameEndCode.GDCheckpointObjects1= [];
gdjs.GameEndCode.GDCheckpointObjects2= [];
gdjs.GameEndCode.GDBeeObjects1= [];
gdjs.GameEndCode.GDBeeObjects2= [];
gdjs.GameEndCode.GDSlimeObjects1= [];
gdjs.GameEndCode.GDSlimeObjects2= [];
gdjs.GameEndCode.GDFlyObjects1= [];
gdjs.GameEndCode.GDFlyObjects2= [];
gdjs.GameEndCode.GDHornSlimeObjects1= [];
gdjs.GameEndCode.GDHornSlimeObjects2= [];
gdjs.GameEndCode.GDNextlevelObjects1= [];
gdjs.GameEndCode.GDNextlevelObjects2= [];
gdjs.GameEndCode.GDExtraLevelObjects1= [];
gdjs.GameEndCode.GDExtraLevelObjects2= [];
gdjs.GameEndCode.GDSnowObjects1= [];
gdjs.GameEndCode.GDSnowObjects2= [];
gdjs.GameEndCode.GDPlanetBlockObjects1= [];
gdjs.GameEndCode.GDPlanetBlockObjects2= [];
gdjs.GameEndCode.GDNewTextObjects1= [];
gdjs.GameEndCode.GDNewTextObjects2= [];
gdjs.GameEndCode.GDNewText2Objects1= [];
gdjs.GameEndCode.GDNewText2Objects2= [];
gdjs.GameEndCode.GDCoinObjects1= [];
gdjs.GameEndCode.GDCoinObjects2= [];
gdjs.GameEndCode.GDPlayerObjects1= [];
gdjs.GameEndCode.GDPlayerObjects2= [];
gdjs.GameEndCode.GDSlimeObjects1= [];
gdjs.GameEndCode.GDSlimeObjects2= [];

gdjs.GameEndCode.conditionTrue_0 = {val:false};
gdjs.GameEndCode.condition0IsTrue_0 = {val:false};
gdjs.GameEndCode.condition1IsTrue_0 = {val:false};


gdjs.GameEndCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameEndCode.condition0IsTrue_0.val = false;
{
gdjs.GameEndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameEndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameEndCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.GameEndCode.GDSlimeObjects1);
{for(var i = 0, len = gdjs.GameEndCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameEndCode.GDPlayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.GameEndCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.GameEndCode.GDSlimeObjects1[i].playAnimation();
}
}}

}


};

gdjs.GameEndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameEndCode.GDCloudObjects1.length = 0;
gdjs.GameEndCode.GDCloudObjects2.length = 0;
gdjs.GameEndCode.GDPlayerObjects1.length = 0;
gdjs.GameEndCode.GDPlayerObjects2.length = 0;
gdjs.GameEndCode.GDGrassPlatformObjects1.length = 0;
gdjs.GameEndCode.GDGrassPlatformObjects2.length = 0;
gdjs.GameEndCode.GDSmallBridgeObjects1.length = 0;
gdjs.GameEndCode.GDSmallBridgeObjects2.length = 0;
gdjs.GameEndCode.GDCoinObjects1.length = 0;
gdjs.GameEndCode.GDCoinObjects2.length = 0;
gdjs.GameEndCode.GDScoreObjects1.length = 0;
gdjs.GameEndCode.GDScoreObjects2.length = 0;
gdjs.GameEndCode.GDLeftObjects1.length = 0;
gdjs.GameEndCode.GDLeftObjects2.length = 0;
gdjs.GameEndCode.GDRightObjects1.length = 0;
gdjs.GameEndCode.GDRightObjects2.length = 0;
gdjs.GameEndCode.GDCheckpointObjects1.length = 0;
gdjs.GameEndCode.GDCheckpointObjects2.length = 0;
gdjs.GameEndCode.GDBeeObjects1.length = 0;
gdjs.GameEndCode.GDBeeObjects2.length = 0;
gdjs.GameEndCode.GDSlimeObjects1.length = 0;
gdjs.GameEndCode.GDSlimeObjects2.length = 0;
gdjs.GameEndCode.GDFlyObjects1.length = 0;
gdjs.GameEndCode.GDFlyObjects2.length = 0;
gdjs.GameEndCode.GDHornSlimeObjects1.length = 0;
gdjs.GameEndCode.GDHornSlimeObjects2.length = 0;
gdjs.GameEndCode.GDNextlevelObjects1.length = 0;
gdjs.GameEndCode.GDNextlevelObjects2.length = 0;
gdjs.GameEndCode.GDExtraLevelObjects1.length = 0;
gdjs.GameEndCode.GDExtraLevelObjects2.length = 0;
gdjs.GameEndCode.GDSnowObjects1.length = 0;
gdjs.GameEndCode.GDSnowObjects2.length = 0;
gdjs.GameEndCode.GDPlanetBlockObjects1.length = 0;
gdjs.GameEndCode.GDPlanetBlockObjects2.length = 0;
gdjs.GameEndCode.GDNewTextObjects1.length = 0;
gdjs.GameEndCode.GDNewTextObjects2.length = 0;
gdjs.GameEndCode.GDNewText2Objects1.length = 0;
gdjs.GameEndCode.GDNewText2Objects2.length = 0;
gdjs.GameEndCode.GDCoinObjects1.length = 0;
gdjs.GameEndCode.GDCoinObjects2.length = 0;
gdjs.GameEndCode.GDPlayerObjects1.length = 0;
gdjs.GameEndCode.GDPlayerObjects2.length = 0;
gdjs.GameEndCode.GDSlimeObjects1.length = 0;
gdjs.GameEndCode.GDSlimeObjects2.length = 0;

gdjs.GameEndCode.eventsList0(runtimeScene);

return;

}

gdjs['GameEndCode'] = gdjs.GameEndCode;
