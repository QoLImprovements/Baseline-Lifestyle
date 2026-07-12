/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-guinea",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174471",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 264.0,
      "key": "0-5-guinea",
      "kind": "unit",
      "label": "0.5 guinea"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-guinea",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook guinea)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Guinea hen, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 460.0,
    "fat_g": 2.47,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.77,
    "magnesium_mg": 24.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 169.0,
    "potassium_mg": 220.0,
    "protein_g": 20.6,
    "salt_g": 0.1725,
    "sat_fat_g": 0.64,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174471",
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
