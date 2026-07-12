/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-173046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 634.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Beef, top loin petite roast, boneless, separable lean only, trimmed to 1/8\" fat, all grades, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.82,
    "energy_kcal": 195.0,
    "fat_g": 8.76,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.02,
    "magnesium_mg": 25.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 232.0,
    "potassium_mg": 371.0,
    "protein_g": 28.3,
    "salt_g": 0.155,
    "sat_fat_g": 3.01,
    "sodium_mg": 62.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173046",
  "state": "Roasted",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
