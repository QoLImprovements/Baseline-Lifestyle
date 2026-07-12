/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-173850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 325.0,
      "key": "roast-with-bone",
      "kind": "unit",
      "label": "roast with bone"
    }
  ],
  "name": "Veal, Australian, rib, rib roast, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.15,
    "energy_kcal": 201.0,
    "fat_g": 13.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.46,
    "magnesium_mg": 0.0,
    "omega3_g": 0.038,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 19.6,
    "salt_g": 0.19,
    "sat_fat_g": 5.89,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173850",
  "state": "Raw",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
