/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-25-cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168158",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Blueberries, dried, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 80.0,
    "energy_kcal": 1330.0,
    "fat_g": 2.5,
    "fibre_g": 7.5,
    "folate_ug": 12.0,
    "iron_mg": 0.9,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 214.0,
    "protein_g": 2.5,
    "salt_g": 0.0075,
    "sat_fat_g": 0.2,
    "sodium_mg": 3.0,
    "sugar_g": 67.5,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 23.8,
    "vitamin_e_mg": 2.35,
    "vitamin_k_ug": 59.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168158",
  "state": "Dried",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "dried",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
