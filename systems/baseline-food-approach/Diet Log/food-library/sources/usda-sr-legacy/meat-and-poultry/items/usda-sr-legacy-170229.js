/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast-yield-from-445-g-raw-meat",
  "description": "Beef Products",
  "id": "usda-sr-legacy-170229",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 355.0,
      "key": "roast-yield-from-445-g-raw-meat",
      "kind": "unit",
      "label": "roast (yield from 445 g raw meat)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, round, eye of round roast, boneless, separable lean and fat, trimmed to 0\" fat, choice, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 171.0,
    "fat_g": 4.83,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.86,
    "magnesium_mg": 15.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 279.0,
    "potassium_mg": 408.0,
    "protein_g": 29.8,
    "salt_g": 0.165,
    "sat_fat_g": 1.66,
    "sodium_mg": 66.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170229",
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
