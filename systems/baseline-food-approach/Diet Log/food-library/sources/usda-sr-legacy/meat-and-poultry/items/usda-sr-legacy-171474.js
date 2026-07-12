/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-breast-bone-removed-yield-from-1-lb-ready-to-cook-chicke",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171474",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "0-5-breast-bone-removed-yield-from-1-lb-ready-to-cook-chicke",
      "kind": "unit",
      "label": "0.5 breast, bone removed (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "0-5-breast-bone-removed",
      "kind": "unit",
      "label": "0.5 breast, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, breast, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 172.0,
    "fat_g": 9.25,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.74,
    "magnesium_mg": 25.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 174.0,
    "potassium_mg": 220.0,
    "protein_g": 20.8,
    "salt_g": 0.1575,
    "sat_fat_g": 2.66,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171474",
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
