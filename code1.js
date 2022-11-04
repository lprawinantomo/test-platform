gdjs.HauptMen_252Code = {};
gdjs.HauptMen_252Code.GDCloudObjects1= [];
gdjs.HauptMen_252Code.GDCloudObjects2= [];
gdjs.HauptMen_252Code.GDPlayerObjects1= [];
gdjs.HauptMen_252Code.GDPlayerObjects2= [];
gdjs.HauptMen_252Code.GDGrassPlatformObjects1= [];
gdjs.HauptMen_252Code.GDGrassPlatformObjects2= [];
gdjs.HauptMen_252Code.GDSmallBridgeObjects1= [];
gdjs.HauptMen_252Code.GDSmallBridgeObjects2= [];
gdjs.HauptMen_252Code.GDCoinObjects1= [];
gdjs.HauptMen_252Code.GDCoinObjects2= [];
gdjs.HauptMen_252Code.GDScoreObjects1= [];
gdjs.HauptMen_252Code.GDScoreObjects2= [];
gdjs.HauptMen_252Code.GDLeftObjects1= [];
gdjs.HauptMen_252Code.GDLeftObjects2= [];
gdjs.HauptMen_252Code.GDRightObjects1= [];
gdjs.HauptMen_252Code.GDRightObjects2= [];
gdjs.HauptMen_252Code.GDCheckpointObjects1= [];
gdjs.HauptMen_252Code.GDCheckpointObjects2= [];
gdjs.HauptMen_252Code.GDBeeObjects1= [];
gdjs.HauptMen_252Code.GDBeeObjects2= [];
gdjs.HauptMen_252Code.GDSlimeObjects1= [];
gdjs.HauptMen_252Code.GDSlimeObjects2= [];
gdjs.HauptMen_252Code.GDFlyObjects1= [];
gdjs.HauptMen_252Code.GDFlyObjects2= [];
gdjs.HauptMen_252Code.GDHornSlimeObjects1= [];
gdjs.HauptMen_252Code.GDHornSlimeObjects2= [];
gdjs.HauptMen_252Code.GDNextlevelObjects1= [];
gdjs.HauptMen_252Code.GDNextlevelObjects2= [];
gdjs.HauptMen_252Code.GDExtraLevelObjects1= [];
gdjs.HauptMen_252Code.GDExtraLevelObjects2= [];
gdjs.HauptMen_252Code.GDSnowObjects1= [];
gdjs.HauptMen_252Code.GDSnowObjects2= [];
gdjs.HauptMen_252Code.GDPlanetBlockObjects1= [];
gdjs.HauptMen_252Code.GDPlanetBlockObjects2= [];
gdjs.HauptMen_252Code.GDLeftArrowRoundButtonObjects1= [];
gdjs.HauptMen_252Code.GDLeftArrowRoundButtonObjects2= [];
gdjs.HauptMen_252Code.GDRightArrowRoundButtonObjects1= [];
gdjs.HauptMen_252Code.GDRightArrowRoundButtonObjects2= [];
gdjs.HauptMen_252Code.GDTopArrowRoundButtonObjects1= [];
gdjs.HauptMen_252Code.GDTopArrowRoundButtonObjects2= [];
gdjs.HauptMen_252Code.GDNewTextObjects1= [];
gdjs.HauptMen_252Code.GDNewTextObjects2= [];
gdjs.HauptMen_252Code.GDNewText2Objects1= [];
gdjs.HauptMen_252Code.GDNewText2Objects2= [];
gdjs.HauptMen_252Code.GDNewSpriteObjects1= [];
gdjs.HauptMen_252Code.GDNewSpriteObjects2= [];
gdjs.HauptMen_252Code.GDNewSprite2Objects1= [];
gdjs.HauptMen_252Code.GDNewSprite2Objects2= [];
gdjs.HauptMen_252Code.GDNewSprite3Objects1= [];
gdjs.HauptMen_252Code.GDNewSprite3Objects2= [];
gdjs.HauptMen_252Code.GDStartObjects1= [];
gdjs.HauptMen_252Code.GDStartObjects2= [];

gdjs.HauptMen_252Code.conditionTrue_0 = {val:false};
gdjs.HauptMen_252Code.condition0IsTrue_0 = {val:false};
gdjs.HauptMen_252Code.condition1IsTrue_0 = {val:false};


gdjs.HauptMen_252Code.mapOfGDgdjs_46HauptMen_95252Code_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.HauptMen_252Code.GDStartObjects1});
gdjs.HauptMen_252Code.eventsList0 = function(runtimeScene) {

{


gdjs.HauptMen_252Code.condition0IsTrue_0.val = false;
{
gdjs.HauptMen_252Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.HauptMen_252Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.HauptMen_252Code.GDStartObjects1);

gdjs.HauptMen_252Code.condition0IsTrue_0.val = false;
{
gdjs.HauptMen_252Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HauptMen_252Code.mapOfGDgdjs_46HauptMen_95252Code_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.HauptMen_252Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};

gdjs.HauptMen_252Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HauptMen_252Code.GDCloudObjects1.length = 0;
gdjs.HauptMen_252Code.GDCloudObjects2.length = 0;
gdjs.HauptMen_252Code.GDPlayerObjects1.length = 0;
gdjs.HauptMen_252Code.GDPlayerObjects2.length = 0;
gdjs.HauptMen_252Code.GDGrassPlatformObjects1.length = 0;
gdjs.HauptMen_252Code.GDGrassPlatformObjects2.length = 0;
gdjs.HauptMen_252Code.GDSmallBridgeObjects1.length = 0;
gdjs.HauptMen_252Code.GDSmallBridgeObjects2.length = 0;
gdjs.HauptMen_252Code.GDCoinObjects1.length = 0;
gdjs.HauptMen_252Code.GDCoinObjects2.length = 0;
gdjs.HauptMen_252Code.GDScoreObjects1.length = 0;
gdjs.HauptMen_252Code.GDScoreObjects2.length = 0;
gdjs.HauptMen_252Code.GDLeftObjects1.length = 0;
gdjs.HauptMen_252Code.GDLeftObjects2.length = 0;
gdjs.HauptMen_252Code.GDRightObjects1.length = 0;
gdjs.HauptMen_252Code.GDRightObjects2.length = 0;
gdjs.HauptMen_252Code.GDCheckpointObjects1.length = 0;
gdjs.HauptMen_252Code.GDCheckpointObjects2.length = 0;
gdjs.HauptMen_252Code.GDBeeObjects1.length = 0;
gdjs.HauptMen_252Code.GDBeeObjects2.length = 0;
gdjs.HauptMen_252Code.GDSlimeObjects1.length = 0;
gdjs.HauptMen_252Code.GDSlimeObjects2.length = 0;
gdjs.HauptMen_252Code.GDFlyObjects1.length = 0;
gdjs.HauptMen_252Code.GDFlyObjects2.length = 0;
gdjs.HauptMen_252Code.GDHornSlimeObjects1.length = 0;
gdjs.HauptMen_252Code.GDHornSlimeObjects2.length = 0;
gdjs.HauptMen_252Code.GDNextlevelObjects1.length = 0;
gdjs.HauptMen_252Code.GDNextlevelObjects2.length = 0;
gdjs.HauptMen_252Code.GDExtraLevelObjects1.length = 0;
gdjs.HauptMen_252Code.GDExtraLevelObjects2.length = 0;
gdjs.HauptMen_252Code.GDSnowObjects1.length = 0;
gdjs.HauptMen_252Code.GDSnowObjects2.length = 0;
gdjs.HauptMen_252Code.GDPlanetBlockObjects1.length = 0;
gdjs.HauptMen_252Code.GDPlanetBlockObjects2.length = 0;
gdjs.HauptMen_252Code.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.HauptMen_252Code.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.HauptMen_252Code.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.HauptMen_252Code.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.HauptMen_252Code.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.HauptMen_252Code.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.HauptMen_252Code.GDNewTextObjects1.length = 0;
gdjs.HauptMen_252Code.GDNewTextObjects2.length = 0;
gdjs.HauptMen_252Code.GDNewText2Objects1.length = 0;
gdjs.HauptMen_252Code.GDNewText2Objects2.length = 0;
gdjs.HauptMen_252Code.GDNewSpriteObjects1.length = 0;
gdjs.HauptMen_252Code.GDNewSpriteObjects2.length = 0;
gdjs.HauptMen_252Code.GDNewSprite2Objects1.length = 0;
gdjs.HauptMen_252Code.GDNewSprite2Objects2.length = 0;
gdjs.HauptMen_252Code.GDNewSprite3Objects1.length = 0;
gdjs.HauptMen_252Code.GDNewSprite3Objects2.length = 0;
gdjs.HauptMen_252Code.GDStartObjects1.length = 0;
gdjs.HauptMen_252Code.GDStartObjects2.length = 0;

gdjs.HauptMen_252Code.eventsList0(runtimeScene);

return;

}

gdjs['HauptMen_252Code'] = gdjs.HauptMen_252Code;
