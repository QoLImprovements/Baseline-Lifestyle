/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171475",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "breast-bone-removed",
      "kind": "unit",
      "label": "breast, bone removed"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "0-5-unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "0.5 unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, breast, meat and skin, cooked, fried, batter",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 8.99,
    "energy_kcal": 1090.0,
    "fat_g": 13.2,
    "fibre_g": 0.3,
    "folate_ug": 15.0,
    "iron_mg": 1.25,
    "magnesium_mg": 24.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 185.0,
    "potassium_mg": 201.0,
    "protein_g": 24.8,
    "salt_g": 0.6875,
    "sat_fat_g": 3.52,
    "sodium_mg": 275.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171475",
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
