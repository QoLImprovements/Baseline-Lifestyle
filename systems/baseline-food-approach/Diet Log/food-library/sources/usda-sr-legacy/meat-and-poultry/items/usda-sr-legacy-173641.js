/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-chicken",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "giblets",
      "kind": "unit",
      "label": "giblets"
    }
  ],
  "name": "Chicken, stewing, giblets, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 2.13,
    "energy_kcal": 703.0,
    "fat_g": 9.21,
    "fibre_g": 0.0,
    "folate_ug": 350.0,
    "iron_mg": 5.93,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 226.0,
    "protein_g": 17.9,
    "salt_g": 0.1925,
    "sat_fat_g": 2.63,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3150.0,
    "vitamin_c_mg": 11.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173641",
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
