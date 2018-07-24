var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({ prop: 1 }, { prop2: 2 })
}

var obj = { recipes: 'prop' }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
recipes.prop = ["oatmeal", "banana"];
return recipes
}