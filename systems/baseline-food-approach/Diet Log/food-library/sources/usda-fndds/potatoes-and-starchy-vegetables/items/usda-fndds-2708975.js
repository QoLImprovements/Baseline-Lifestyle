/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2708975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soupy rice mixture with chicken and potatoes, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 12.1,
    "energy_kcal": 112.0,
    "fat_g": 4.26,
    "fibre_g": 0.9,
    "folate_ug": 20.0,
    "iron_mg": 0.74,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 218.0,
    "protein_g": 6.34,
    "salt_g": 0.725,
    "sat_fat_g": 1.23,
    "sodium_mg": 290.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708975",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
