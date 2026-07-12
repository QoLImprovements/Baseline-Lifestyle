/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, water pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 8.51,
    "energy_kcal": 134.0,
    "fat_g": 0.05,
    "fibre_g": 1.0,
    "folate_ug": 3.0,
    "iron_mg": 0.25,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 94.0,
    "protein_g": 0.42,
    "salt_g": 0.01,
    "sat_fat_g": 0.006,
    "sodium_mg": 4.0,
    "sugar_g": 7.51,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174667",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
