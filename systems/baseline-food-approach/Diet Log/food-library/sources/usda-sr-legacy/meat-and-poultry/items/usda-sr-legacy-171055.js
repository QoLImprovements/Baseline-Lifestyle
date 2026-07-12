/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-chicken-skin-only",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171055",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "0-5-chicken-skin-only",
      "kind": "unit",
      "label": "0.5 chicken, skin only"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, skin only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 1900.0,
    "fat_g": 40.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.51,
    "magnesium_mg": 15.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 125.0,
    "potassium_mg": 136.0,
    "protein_g": 20.4,
    "salt_g": 0.1625,
    "sat_fat_g": 11.4,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171055",
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
