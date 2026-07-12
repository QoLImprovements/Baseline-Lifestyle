/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "neck-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172382",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "neck-bone-removed",
      "kind": "unit",
      "label": "neck, bone removed"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, neck, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 1240.0,
    "fat_g": 26.2,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.9,
    "magnesium_mg": 13.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 112.0,
    "potassium_mg": 137.0,
    "protein_g": 14.1,
    "salt_g": 0.16,
    "sat_fat_g": 7.27,
    "sodium_mg": 64.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172382",
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
