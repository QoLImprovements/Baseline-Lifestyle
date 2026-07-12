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
  "id": "usda-sr-legacy-171492",
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
      "gramsPerUnit": 112.0,
      "key": "0-5-unit-yield-from-1-lb-ready-to-cook-turkey",
      "kind": "unit",
      "label": "0.5 unit (yield from 1 lb ready-to-cook turkey)"
    },
    {
      "gramsPerUnit": 864.0,
      "key": "breast-bone-removed",
      "kind": "unit",
      "label": "breast, bone removed"
    }
  ],
  "name": "Turkey, all classes, breast, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 791.0,
    "fat_g": 7.41,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.4,
    "magnesium_mg": 27.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 210.0,
    "potassium_mg": 288.0,
    "protein_g": 28.7,
    "salt_g": 0.1575,
    "sat_fat_g": 2.1,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171492",
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
