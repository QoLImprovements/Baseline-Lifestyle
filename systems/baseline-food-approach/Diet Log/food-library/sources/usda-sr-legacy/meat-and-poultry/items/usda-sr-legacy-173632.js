/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing, bone and skin removed"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "wing-bone-and-skin-removed-yield-from-1-lb-ready-to-cook-chi",
      "kind": "unit",
      "label": "wing, bone and skin removed (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, wing, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 527.0,
    "fat_g": 3.54,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.88,
    "magnesium_mg": 22.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 155.0,
    "potassium_mg": 194.0,
    "protein_g": 22.0,
    "salt_g": 0.2025,
    "sat_fat_g": 0.94,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173632",
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
