/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168708",
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
      "gramsPerUnit": 283.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    }
  ],
  "name": "Beef, round, top round, separable lean only, trimmed to 1/8\" fat, choice, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 2.03,
    "energy_kcal": 954.0,
    "fat_g": 8.33,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 3.4,
    "magnesium_mg": 35.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 286.0,
    "potassium_mg": 484.0,
    "protein_g": 33.9,
    "salt_g": 0.1625,
    "sat_fat_g": 2.4,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168708",
  "state": "Fried",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
