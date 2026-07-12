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
  "id": "usda-sr-legacy-171067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "0-5-chicken-bone-and-skin-removed",
      "kind": "unit",
      "label": "0.5 chicken, bone and skin removed"
    }
  ],
  "name": "Chicken, broilers or fryers, dark meat, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 523.0,
    "fat_g": 4.31,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.03,
    "magnesium_mg": 23.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 162.0,
    "potassium_mg": 222.0,
    "protein_g": 20.1,
    "salt_g": 0.2125,
    "sat_fat_g": 1.1,
    "sodium_mg": 85.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171067",
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
