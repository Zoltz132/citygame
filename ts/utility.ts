function getFrom2dArray(target, arr: number[]): any
{
  var result = [];
  for (var i = 0; i < arr.length; i++)
  {
    if 
    ( 
      (arr[i][0] >= 0 && arr[i][0] < target.length) &&
      (arr[i][1] >= 0 && arr[i][1] < target.length)
    )
    {
      result.push( target[arr[i][0]][arr[i][1]] );
    }

  };
  return result;
}

function getRandomProperty( target )
{
  var _targetKeys = Object.keys(target);
  var _rnd = Math.floor(Math.random() * (_targetKeys.length));
  var _rndProp = target[ _targetKeys[_rnd] ];
  return _rndProp;
}

function setDeepProperties(baseObj, target: any[], props)
{
  if (target.length <= 0)
  {
    for (var prop in props)
    {
      baseObj[prop] = props[prop];
    }
    return baseObj;
  }

  else
  {
    var targetProp = target.shift();

    if ( !baseObj.hasOwnProperty(targetProp) )
    {
      baseObj[targetProp] = {};
    }
    var newBaseObj = baseObj[targetProp];

    return setDeepProperties(newBaseObj, target, props)
  }
}

/*
function iterativeSetDeepProperties(baseObj, target, props)
{
  var currObj = baseObj;
  var targetProp;
  for (var i = 0; i < target.length; i++)
  {
    targetProp = target[i];
    if ( !currObj.hasOwnProperty(targetProp) )
    {
      currObj[targetProp] = {};
    }
    currObj = currObj[targetProp];
  }
  for (var prop in props)
  {
    currObj[prop] = props[prop];
  }
}
*/