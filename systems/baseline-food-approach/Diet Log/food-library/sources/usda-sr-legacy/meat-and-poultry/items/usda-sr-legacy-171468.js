/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-chicken-separable-fat",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171468",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "0-5-chicken-separable-fat",
      "kind": "unit",
      "label": "0.5 chicken, separable fat"
    },
    {
      "gramsPerUnit": 12.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, broilers or fryers, separable fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 2630.0,
    "fat_g": 68.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.7,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 64.0,
    "protein_g": 3.73,
    "salt_g": 0.08,
    "sat_fat_g": 20.2,
    "sodium_mg": 32.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 125.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.73,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171468",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
