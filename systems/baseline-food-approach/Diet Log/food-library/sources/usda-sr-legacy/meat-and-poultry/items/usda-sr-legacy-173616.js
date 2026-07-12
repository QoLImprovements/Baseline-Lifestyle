/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "leg-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173616",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "leg-bone-removed",
      "kind": "unit",
      "label": "leg, bone removed"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, leg, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 2.5,
    "energy_kcal": 1060.0,
    "fat_g": 14.4,
    "fibre_g": 0.1,
    "folate_ug": 11.0,
    "iron_mg": 1.43,
    "magnesium_mg": 24.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 182.0,
    "potassium_mg": 233.0,
    "protein_g": 26.8,
    "salt_g": 0.22,
    "sat_fat_g": 3.9,
    "sodium_mg": 88.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173616",
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
