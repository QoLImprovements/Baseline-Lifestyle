/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "plantain",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168215",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 267.0,
      "key": "plantain",
      "kind": "unit",
      "label": "plantain"
    }
  ],
  "name": "Plantains, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 36.7,
    "energy_kcal": 152.0,
    "fat_g": 0.07,
    "fibre_g": 2.2,
    "folate_ug": 28.0,
    "iron_mg": 0.75,
    "magnesium_mg": 41.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 31.0,
    "potassium_mg": 431.0,
    "protein_g": 1.25,
    "salt_g": 0.005,
    "sat_fat_g": 0.121,
    "sodium_mg": 2.0,
    "sugar_g": 2.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 20.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168215",
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
