/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
  "description": "Beef Products",
  "id": "usda-sr-legacy-169533",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 329.0,
      "key": "piece-cooked-excluding-refuse-yield-from-1-lb-raw-meat-with",
      "kind": "unit",
      "label": "piece, cooked, excluding refuse (yield from 1 lb raw meat with refuse)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 359.0,
      "key": "steak-yield-from-raw-steak-weighing-491g",
      "kind": "unit",
      "label": "steak (yield from raw steak weighing 491g)"
    }
  ],
  "name": "Beef, round, top round, steak, separable lean and fat, trimmed to 1/8\" fat, select, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 839.0,
    "fat_g": 7.73,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.52,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 256.0,
    "protein_g": 30.6,
    "salt_g": 0.1025,
    "sat_fat_g": 2.93,
    "sodium_mg": 41.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169533",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
