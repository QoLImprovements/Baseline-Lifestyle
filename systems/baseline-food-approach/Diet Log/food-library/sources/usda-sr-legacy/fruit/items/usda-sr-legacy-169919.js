/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-without-seeds",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169919",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "fruit-without-seeds",
      "kind": "unit",
      "label": "fruit without seeds"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Oranges, raw, with peel",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 15.5,
    "energy_kcal": 262.0,
    "fat_g": 0.3,
    "fibre_g": 4.5,
    "folate_ug": 30.0,
    "iron_mg": 0.8,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 196.0,
    "protein_g": 1.3,
    "salt_g": 0.005,
    "sat_fat_g": 0.035,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 71.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169919",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
