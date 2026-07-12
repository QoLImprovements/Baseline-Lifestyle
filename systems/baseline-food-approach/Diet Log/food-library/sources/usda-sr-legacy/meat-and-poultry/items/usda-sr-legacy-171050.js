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
  "id": "usda-sr-legacy-171050",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 682.0,
      "key": "chicken",
      "kind": "unit",
      "label": "chicken"
    }
  ],
  "name": "Chicken, broilers or fryers, meat and skin and giblets and neck, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.06,
    "energy_kcal": 979.0,
    "fat_g": 13.3,
    "fibre_g": 0.0,
    "folate_ug": 29.0,
    "iron_mg": 1.66,
    "magnesium_mg": 23.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 182.0,
    "potassium_mg": 212.0,
    "protein_g": 26.8,
    "salt_g": 0.1975,
    "sat_fat_g": 3.7,
    "sodium_mg": 79.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 191.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171050",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
