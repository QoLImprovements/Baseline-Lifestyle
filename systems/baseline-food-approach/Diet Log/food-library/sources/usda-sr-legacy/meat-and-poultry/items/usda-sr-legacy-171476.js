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
  "id": "usda-sr-legacy-171476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "0-5-breast-bone-removed",
      "kind": "unit",
      "label": "0.5 breast, bone removed"
    }
  ],
  "name": "Chicken, broilers or fryers, breast, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 1.64,
    "energy_kcal": 929.0,
    "fat_g": 8.87,
    "fibre_g": 0.1,
    "folate_ug": 6.0,
    "iron_mg": 1.19,
    "magnesium_mg": 30.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 233.0,
    "potassium_mg": 259.0,
    "protein_g": 31.8,
    "salt_g": 0.19,
    "sat_fat_g": 2.45,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171476",
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
