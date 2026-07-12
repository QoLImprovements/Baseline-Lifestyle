/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-back-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171469",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "0-5-back-bone-removed",
      "kind": "unit",
      "label": "0.5 back, bone removed"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, back, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 1340.0,
    "fat_g": 28.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.94,
    "magnesium_mg": 15.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 113.0,
    "potassium_mg": 144.0,
    "protein_g": 14.0,
    "salt_g": 0.16,
    "sat_fat_g": 8.34,
    "sodium_mg": 64.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171469",
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
