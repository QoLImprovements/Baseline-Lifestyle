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
  "id": "usda-sr-legacy-168722",
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
      "gramsPerUnit": 140.0,
      "key": "steak-yield-from-181-g-raw-meat",
      "kind": "unit",
      "label": "steak (yield from 181 g raw meat)"
    }
  ],
  "name": "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8\" fat, choice, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 1140.0,
    "fat_g": 17.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.76,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 196.0,
    "potassium_mg": 318.0,
    "protein_g": 26.4,
    "salt_g": 0.13,
    "sat_fat_g": 7.0,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168722",
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
