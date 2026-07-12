/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-turkey-skin-only",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171499",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "0-5-turkey-skin-only",
      "kind": "unit",
      "label": "0.5 turkey, skin only"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-turkey",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook turkey)"
    }
  ],
  "name": "Turkey, young hen, skin only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.0,
    "energy_kcal": 2020.0,
    "fat_g": 44.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.82,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 155.0,
    "protein_g": 19.0,
    "salt_g": 0.11,
    "sat_fat_g": 11.6,
    "sodium_mg": 44.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171499",
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
