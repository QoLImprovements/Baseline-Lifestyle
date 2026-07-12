/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173646",
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
      "gramsPerUnit": 196.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-capon",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to cook capon)"
    },
    {
      "gramsPerUnit": 637.0,
      "key": "0-5-capon-bone-removed",
      "kind": "unit",
      "label": "0.5 capon, bone removed"
    }
  ],
  "name": "Chicken, capons, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 958.0,
    "fat_g": 11.6,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.49,
    "magnesium_mg": 24.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 246.0,
    "potassium_mg": 255.0,
    "protein_g": 29.0,
    "salt_g": 0.1225,
    "sat_fat_g": 3.26,
    "sodium_mg": 49.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173646",
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
