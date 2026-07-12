/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-thawed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "cup-thawed",
      "kind": "unit",
      "label": "cup, thawed"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Strawberries, frozen, sweetened, sliced",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 25.9,
    "energy_kcal": 402.0,
    "fat_g": 0.13,
    "fibre_g": 1.9,
    "folate_ug": 15.0,
    "iron_mg": 0.59,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 98.0,
    "protein_g": 0.53,
    "salt_g": 0.0075,
    "sat_fat_g": 0.007,
    "sodium_mg": 3.0,
    "sugar_g": 24.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 41.4,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168174",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "frozen",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
