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
  "id": "usda-sr-legacy-168718",
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
      "gramsPerUnit": 221.0,
      "key": "steak-yield-from-270-g-raw-meat",
      "kind": "unit",
      "label": "steak (yield from 270 g raw meat)"
    }
  ],
  "name": "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8\" fat, choice, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 278.0,
    "fat_g": 18.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.75,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 195.0,
    "potassium_mg": 316.0,
    "protein_g": 26.2,
    "salt_g": 0.13,
    "sat_fat_g": 7.26,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168718",
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
