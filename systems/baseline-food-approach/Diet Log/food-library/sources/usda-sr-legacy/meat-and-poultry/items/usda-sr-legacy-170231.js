/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast-yield-from-1405-g-raw-meat",
  "description": "Beef Products",
  "id": "usda-sr-legacy-170231",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1138.0,
      "key": "roast-yield-from-1405-g-raw-meat",
      "kind": "unit",
      "label": "roast (yield from 1405 g raw meat)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, round, tip round, roast, separable lean and fat, trimmed to 0\" fat, choice, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 196.0,
    "fat_g": 8.9,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.22,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 216.0,
    "protein_g": 27.0,
    "salt_g": 0.0875,
    "sat_fat_g": 3.26,
    "sodium_mg": 35.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170231",
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
