/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bag-8-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167970",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "bag-8-oz",
      "kind": "unit",
      "label": "bag (8 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, tortilla chips, taco-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 63.1,
    "energy_kcal": 2010.0,
    "fat_g": 24.2,
    "fibre_g": 5.3,
    "folate_ug": 21.0,
    "iron_mg": 2.02,
    "magnesium_mg": 88.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 217.0,
    "protein_g": 7.9,
    "salt_g": 1.9675,
    "sat_fat_g": 4.64,
    "sodium_mg": 787.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167970",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
