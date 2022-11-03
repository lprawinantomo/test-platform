
if (typeof gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude !== "undefined") {
  gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude = {};

gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude.conditionTrue_0 = {val:false};
gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("__CameraShake").getChild("DefaultAmplitudeAngle").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AmplitudeAngle")) || 0 : 0));
}}

}


};

gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude.func = function(runtimeScene, AmplitudeAngle, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "AmplitudeAngle") return AmplitudeAngle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraShake__SetDefaultRotationAmplitude.registeredGdjsCallbacks = [];