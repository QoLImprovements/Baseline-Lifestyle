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
  "id": "usda-sr-legacy-171449",
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
      "gramsPerUnit": 314.0,
      "key": "0-5-chicken-bone-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone removed"
    },
    {
      "gramsPerUnit": 188.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, meat and skin, cooked, fried, flour",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 3.15,
    "energy_kcal": 1120.0,
    "fat_g": 14.9,
    "fibre_g": 0.1,
    "folate_ug": 9.0,
    "iron_mg": 1.38,
    "magnesium_mg": 25.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 191.0,
    "potassium_mg": 234.0,
    "protein_g": 28.6,
    "salt_g": 0.21,
    "sat_fat_g": 4.06,
    "sodium_mg": 84.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171449",
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
