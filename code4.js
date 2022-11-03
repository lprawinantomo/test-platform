gdjs.GameOverCode = {};
gdjs.GameOverCode.GDCloudObjects1= [];
gdjs.GameOverCode.GDCloudObjects2= [];
gdjs.GameOverCode.GDPlayerObjects1= [];
gdjs.GameOverCode.GDPlayerObjects2= [];
gdjs.GameOverCode.GDGrassPlatformObjects1= [];
gdjs.GameOverCode.GDGrassPlatformObjects2= [];
gdjs.GameOverCode.GDSmallBridgeObjects1= [];
gdjs.GameOverCode.GDSmallBridgeObjects2= [];
gdjs.GameOverCode.GDCoinObjects1= [];
gdjs.GameOverCode.GDCoinObjects2= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];
gdjs.GameOverCode.GDLeftObjects1= [];
gdjs.GameOverCode.GDLeftObjects2= [];
gdjs.GameOverCode.GDRightObjects1= [];
gdjs.GameOverCode.GDRightObjects2= [];
gdjs.GameOverCode.GDCheckpointObjects1= [];
gdjs.GameOverCode.GDCheckpointObjects2= [];
gdjs.GameOverCode.GDBeeObjects1= [];
gdjs.GameOverCode.GDBeeObjects2= [];
gdjs.GameOverCode.GDSlimeObjects1= [];
gdjs.GameOverCode.GDSlimeObjects2= [];
gdjs.GameOverCode.GDFlyObjects1= [];
gdjs.GameOverCode.GDFlyObjects2= [];
gdjs.GameOverCode.GDHornSlimeObjects1= [];
gdjs.GameOverCode.GDHornSlimeObjects2= [];
gdjs.GameOverCode.GDNextlevelObjects1= [];
gdjs.GameOverCode.GDNextlevelObjects2= [];
gdjs.GameOverCode.GDExtraLevelObjects1= [];
gdjs.GameOverCode.GDExtraLevelObjects2= [];
gdjs.GameOverCode.GDSnowObjects1= [];
gdjs.GameOverCode.GDSnowObjects2= [];
gdjs.GameOverCode.GDPlanetBlockObjects1= [];
gdjs.GameOverCode.GDPlanetBlockObjects2= [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDItsOkObjects1= [];
gdjs.GameOverCode.GDItsOkObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HornSlime"), gdjs.GameOverCode.GDHornSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.GameOverCode.GDSlimeObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDHornSlimeObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHornSlimeObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSlimeObjects1[i].playAnimation();
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{


{
}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDCloudObjects1.length = 0;
gdjs.GameOverCode.GDCloudObjects2.length = 0;
gdjs.GameOverCode.GDPlayerObjects1.length = 0;
gdjs.GameOverCode.GDPlayerObjects2.length = 0;
gdjs.GameOverCode.GDGrassPlatformObjects1.length = 0;
gdjs.GameOverCode.GDGrassPlatformObjects2.length = 0;
gdjs.GameOverCode.GDSmallBridgeObjects1.length = 0;
gdjs.GameOverCode.GDSmallBridgeObjects2.length = 0;
gdjs.GameOverCode.GDCoinObjects1.length = 0;
gdjs.GameOverCode.GDCoinObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;
gdjs.GameOverCode.GDLeftObjects1.length = 0;
gdjs.GameOverCode.GDLeftObjects2.length = 0;
gdjs.GameOverCode.GDRightObjects1.length = 0;
gdjs.GameOverCode.GDRightObjects2.length = 0;
gdjs.GameOverCode.GDCheckpointObjects1.length = 0;
gdjs.GameOverCode.GDCheckpointObjects2.length = 0;
gdjs.GameOverCode.GDBeeObjects1.length = 0;
gdjs.GameOverCode.GDBeeObjects2.length = 0;
gdjs.GameOverCode.GDSlimeObjects1.length = 0;
gdjs.GameOverCode.GDSlimeObjects2.length = 0;
gdjs.GameOverCode.GDFlyObjects1.length = 0;
gdjs.GameOverCode.GDFlyObjects2.length = 0;
gdjs.GameOverCode.GDHornSlimeObjects1.length = 0;
gdjs.GameOverCode.GDHornSlimeObjects2.length = 0;
gdjs.GameOverCode.GDNextlevelObjects1.length = 0;
gdjs.GameOverCode.GDNextlevelObjects2.length = 0;
gdjs.GameOverCode.GDExtraLevelObjects1.length = 0;
gdjs.GameOverCode.GDExtraLevelObjects2.length = 0;
gdjs.GameOverCode.GDSnowObjects1.length = 0;
gdjs.GameOverCode.GDSnowObjects2.length = 0;
gdjs.GameOverCode.GDPlanetBlockObjects1.length = 0;
gdjs.GameOverCode.GDPlanetBlockObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDItsOkObjects1.length = 0;
gdjs.GameOverCode.GDItsOkObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
