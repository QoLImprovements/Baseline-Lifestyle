/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-eat-pheasant",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174474",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "unit-yield-from-1-lb-ready-to-eat-pheasant",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-eat pheasant)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "0-5-breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 breast, bone and skin removed"
    }
  ],
  "name": "Pheasant, breast, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.0,
    "energy_kcal": 556.0,
    "fat_g": 3.25,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.79,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 242.0,
    "protein_g": 24.4,
    "salt_g": 0.0825,
    "sat_fat_g": 1.1,
    "sodium_mg": 33.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174474",
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
