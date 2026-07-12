/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171073",
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
      "gramsPerUnit": 51.0,
      "key": "back-bone-and-skin-removed",
      "kind": "unit",
      "label": "back, bone and skin removed"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "0-5-unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "0.5 unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, back, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 573.0,
    "fat_g": 5.92,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.04,
    "magnesium_mg": 22.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 151.0,
    "potassium_mg": 204.0,
    "protein_g": 19.6,
    "salt_g": 0.205,
    "sat_fat_g": 1.52,
    "sodium_mg": 82.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171073",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
