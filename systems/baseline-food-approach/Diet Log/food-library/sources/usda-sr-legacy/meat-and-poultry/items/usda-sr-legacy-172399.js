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
  "id": "usda-sr-legacy-172399",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
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
      "gramsPerUnit": 593.0,
      "key": "chicken-bone-removed",
      "kind": "unit",
      "label": "chicken, bone removed"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    }
  ],
  "name": "Chicken, stewing, meat and skin, and giblets and neck, cooked, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 894.0,
    "fat_g": 11.9,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 1.64,
    "magnesium_mg": 19.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 151.0,
    "potassium_mg": 171.0,
    "protein_g": 24.9,
    "salt_g": 0.1675,
    "sat_fat_g": 3.32,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 182.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172399",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
