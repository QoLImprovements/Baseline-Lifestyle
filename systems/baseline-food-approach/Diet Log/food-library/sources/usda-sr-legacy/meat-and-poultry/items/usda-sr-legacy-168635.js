/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak-yield-from-532-g-raw-meat",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 393.0,
      "key": "steak-yield-from-532-g-raw-meat",
      "kind": "unit",
      "label": "steak (yield from 532 g raw meat)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, top sirloin, steak, separable lean only, trimmed to 0\" fat, choice, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 788.0,
    "fat_g": 6.55,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.07,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 237.0,
    "potassium_mg": 380.0,
    "protein_g": 30.3,
    "salt_g": 0.1575,
    "sat_fat_g": 2.5,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168635",
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
