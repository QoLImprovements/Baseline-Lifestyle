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
  "id": "usda-sr-legacy-171094",
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
      "gramsPerUnit": 186.0,
      "key": "wing-bone-removed",
      "kind": "unit",
      "label": "wing, bone removed"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-turkey",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook turkey)"
    }
  ],
  "name": "Turkey, all classes, wing, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.0,
    "energy_kcal": 958.0,
    "fat_g": 12.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.46,
    "magnesium_mg": 25.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 197.0,
    "potassium_mg": 266.0,
    "protein_g": 27.4,
    "salt_g": 0.1525,
    "sat_fat_g": 3.39,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171094",
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
