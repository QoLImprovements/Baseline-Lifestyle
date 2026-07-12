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
  "id": "usda-sr-legacy-172379",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "leg-bone-and-skin-removed",
      "kind": "unit",
      "label": "leg, bone and skin removed"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, leg, meat only, cooked, fried",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.65,
    "energy_kcal": 870.0,
    "fat_g": 9.32,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.4,
    "magnesium_mg": 25.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 193.0,
    "potassium_mg": 254.0,
    "protein_g": 28.4,
    "salt_g": 0.24,
    "sat_fat_g": 2.49,
    "sodium_mg": 96.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172379",
  "state": "Fried",
  "subcategory": "Poultry Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
