/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-slices",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173929",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Apples, raw, without skin, cooked, microwave",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 14.4,
    "energy_kcal": 56.0,
    "fat_g": 0.42,
    "fibre_g": 2.8,
    "folate_ug": 1.0,
    "iron_mg": 0.17,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 93.0,
    "protein_g": 0.28,
    "salt_g": 0.0025,
    "sat_fat_g": 0.068,
    "sodium_mg": 1.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173929",
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
