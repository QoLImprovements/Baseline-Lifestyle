/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "liver",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172415",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "liver",
      "kind": "unit",
      "label": "liver"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-goose",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook goose)"
    }
  ],
  "name": "Goose, liver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 6.32,
    "energy_kcal": 556.0,
    "fat_g": 4.28,
    "fibre_g": 0.0,
    "folate_ug": 738.0,
    "iron_mg": 30.5,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 261.0,
    "potassium_mg": 230.0,
    "protein_g": 16.4,
    "salt_g": 0.35,
    "sat_fat_g": 1.59,
    "sodium_mg": 140.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9310.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172415",
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
