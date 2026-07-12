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
  "id": "usda-sr-legacy-172829",
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
      "gramsPerUnit": 208.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-quail",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to cook quail)"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "breast",
      "kind": "unit",
      "label": "breast"
    }
  ],
  "name": "Quail, breast, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 515.0,
    "fat_g": 2.99,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 2.31,
    "magnesium_mg": 28.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 228.0,
    "potassium_mg": 260.0,
    "protein_g": 22.6,
    "salt_g": 0.1375,
    "sat_fat_g": 0.87,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172829",
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
