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
  "id": "usda-sr-legacy-172386",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "thigh-bone-removed",
      "kind": "unit",
      "label": "thigh, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, thigh, meat and skin, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 9.08,
    "energy_kcal": 1160.0,
    "fat_g": 16.5,
    "fibre_g": 0.3,
    "folate_ug": 19.0,
    "iron_mg": 1.45,
    "magnesium_mg": 21.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 155.0,
    "potassium_mg": 192.0,
    "protein_g": 21.6,
    "salt_g": 0.72,
    "sat_fat_g": 4.41,
    "sodium_mg": 288.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172386",
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
