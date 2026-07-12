/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-turkey",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171495",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-turkey",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook turkey)"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "wing-bone-removed",
      "kind": "unit",
      "label": "wing, bone removed"
    }
  ],
  "name": "Turkey, all classes, wing, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 824.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.26,
    "magnesium_mg": 21.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 165.0,
    "potassium_mg": 240.0,
    "protein_g": 20.2,
    "salt_g": 0.1375,
    "sat_fat_g": 3.28,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171495",
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
