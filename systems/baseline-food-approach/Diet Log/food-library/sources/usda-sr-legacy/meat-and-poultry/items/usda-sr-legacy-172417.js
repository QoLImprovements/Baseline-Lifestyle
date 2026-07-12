/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "leg-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "leg-bone-and-skin-removed",
      "kind": "unit",
      "label": "leg, bone and skin removed"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "unit-yield-from-1-lb-ready-to-eat-pheasant",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-eat pheasant)"
    }
  ],
  "name": "Pheasant, leg, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 0.0,
    "energy_kcal": 561.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.78,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 280.0,
    "potassium_mg": 296.0,
    "protein_g": 22.2,
    "salt_g": 0.1125,
    "sat_fat_g": 1.46,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172417",
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
