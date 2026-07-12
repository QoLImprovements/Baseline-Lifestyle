/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "cup",
  "description": "Snacks",
  "id": "usda-sr-legacy-167959",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, popcorn, air-popped",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 77.8,
    "energy_kcal": 387.0,
    "fat_g": 4.54,
    "fibre_g": 14.5,
    "folate_ug": 31.0,
    "iron_mg": 3.19,
    "magnesium_mg": 144.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 358.0,
    "potassium_mg": 329.0,
    "protein_g": 12.9,
    "salt_g": 0.02,
    "sat_fat_g": 0.637,
    "sodium_mg": 8.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167959",
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
