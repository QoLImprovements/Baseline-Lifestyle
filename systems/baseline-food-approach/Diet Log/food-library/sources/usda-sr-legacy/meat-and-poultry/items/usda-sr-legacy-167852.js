/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167852",
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
      "gramsPerUnit": 238.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    }
  ],
  "name": "Pork, fresh, shoulder, blade, boston (roasts), separable lean only, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 971.0,
    "fat_g": 14.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.56,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 235.0,
    "potassium_mg": 427.0,
    "protein_g": 24.2,
    "salt_g": 0.22,
    "sat_fat_g": 5.19,
    "sodium_mg": 88.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167852",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
