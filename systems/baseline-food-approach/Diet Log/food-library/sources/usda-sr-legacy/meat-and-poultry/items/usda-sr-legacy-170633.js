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
  "id": "usda-sr-legacy-170633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 330.0,
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
      "gramsPerUnit": 346.0,
      "key": "roast-yield-from-436-g-raw-meat",
      "kind": "unit",
      "label": "roast (yield from 436 g raw meat)"
    }
  ],
  "name": "Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0\" fat, all grades, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 163.0,
    "fat_g": 3.9,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.84,
    "magnesium_mg": 15.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 281.0,
    "potassium_mg": 404.0,
    "protein_g": 29.8,
    "salt_g": 0.1675,
    "sat_fat_g": 1.38,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170633",
  "state": "Roasted",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
