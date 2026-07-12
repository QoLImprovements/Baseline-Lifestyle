/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172387",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh, bone and skin removed"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, thigh, meat only, cooked, fried",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 1.18,
    "energy_kcal": 912.0,
    "fat_g": 10.3,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.46,
    "magnesium_mg": 26.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 199.0,
    "potassium_mg": 259.0,
    "protein_g": 28.2,
    "salt_g": 0.2375,
    "sat_fat_g": 2.78,
    "sodium_mg": 95.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172387",
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
