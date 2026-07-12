/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "neck-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "neck-bone-and-skin-removed",
      "kind": "unit",
      "label": "neck, bone and skin removed"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, neck, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 644.0,
    "fat_g": 8.78,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.06,
    "magnesium_mg": 17.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 113.0,
    "potassium_mg": 175.0,
    "protein_g": 17.6,
    "salt_g": 0.2025,
    "sat_fat_g": 2.25,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173623",
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
