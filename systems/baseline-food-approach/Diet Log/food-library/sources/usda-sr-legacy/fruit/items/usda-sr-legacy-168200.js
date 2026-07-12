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
  "id": "usda-sr-legacy-168200",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Plantains, yellow, fried, Latino restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 40.8,
    "energy_kcal": 236.0,
    "fat_g": 7.51,
    "fibre_g": 3.2,
    "folate_ug": 0.0,
    "iron_mg": 0.62,
    "magnesium_mg": 45.0,
    "omega3_g": 0.221,
    "phosphorus_mg": 43.0,
    "potassium_mg": 507.0,
    "protein_g": 1.42,
    "salt_g": 0.015,
    "sat_fat_g": 1.82,
    "sodium_mg": 6.0,
    "sugar_g": 21.8,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 31.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168200",
  "state": "Fried",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fried",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
