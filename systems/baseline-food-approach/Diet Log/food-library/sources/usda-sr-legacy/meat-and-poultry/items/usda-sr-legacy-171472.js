/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "back-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "back-bone-and-skin-removed",
      "kind": "unit",
      "label": "back, bone and skin removed"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "0-5-unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "0.5 unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, back, meat only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.0,
    "energy_kcal": 1000.0,
    "fat_g": 13.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.39,
    "magnesium_mg": 22.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 165.0,
    "potassium_mg": 237.0,
    "protein_g": 28.2,
    "salt_g": 0.24,
    "sat_fat_g": 3.6,
    "sodium_mg": 96.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171472",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
