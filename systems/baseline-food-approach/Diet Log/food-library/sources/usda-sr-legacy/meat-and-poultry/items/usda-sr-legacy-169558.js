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
  "id": "usda-sr-legacy-169558",
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
      "gramsPerUnit": 569.0,
      "key": "roast-yield-from-690g-raw-meat",
      "kind": "unit",
      "label": "roast (yield from 690g raw meat)"
    }
  ],
  "name": "Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0\" fat, all grades, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 883.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.66,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 201.0,
    "potassium_mg": 323.0,
    "protein_g": 26.0,
    "salt_g": 0.1325,
    "sat_fat_g": 0.0,
    "sodium_mg": 53.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169558",
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
