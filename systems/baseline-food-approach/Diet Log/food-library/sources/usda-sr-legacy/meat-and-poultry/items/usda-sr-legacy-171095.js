/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-turkey-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171095",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 808.0,
      "key": "0-5-turkey-bone-removed",
      "kind": "unit",
      "label": "0.5 turkey, bone removed"
    },
    {
      "gramsPerUnit": 229.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-turkey",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook turkey)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Turkey, fryer-roasters, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 720.0,
    "fat_g": 5.72,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.95,
    "magnesium_mg": 25.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 198.0,
    "potassium_mg": 250.0,
    "protein_g": 28.3,
    "salt_g": 0.165,
    "sat_fat_g": 1.65,
    "sodium_mg": 66.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171095",
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
