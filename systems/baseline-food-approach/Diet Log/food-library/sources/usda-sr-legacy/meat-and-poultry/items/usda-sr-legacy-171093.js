/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "unit-yield-from-1-lb-ready-to-cook-turkey",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-turkey",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook turkey)"
    },
    {
      "gramsPerUnit": 1132.0,
      "key": "0-5-breast-bone-removed",
      "kind": "unit",
      "label": "0.5 breast, bone removed"
    }
  ],
  "name": "Turkey, all classes, breast, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 657.0,
    "fat_g": 7.02,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.2,
    "magnesium_mg": 24.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 186.0,
    "potassium_mg": 275.0,
    "protein_g": 21.9,
    "salt_g": 0.1475,
    "sat_fat_g": 1.91,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171093",
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
