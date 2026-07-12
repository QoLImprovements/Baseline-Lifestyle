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
  "id": "usda-sr-legacy-172392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing, bone and skin removed"
    }
  ],
  "name": "Chicken, broilers or fryers, wing, meat only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 849.0,
    "fat_g": 8.13,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.16,
    "magnesium_mg": 21.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 166.0,
    "potassium_mg": 210.0,
    "protein_g": 30.5,
    "salt_g": 0.23,
    "sat_fat_g": 2.26,
    "sodium_mg": 92.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172392",
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
