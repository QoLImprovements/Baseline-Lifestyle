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
  "id": "usda-sr-legacy-169458",
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
      "gramsPerUnit": 393.0,
      "key": "steak-yield-from-532-g-raw-meat",
      "kind": "unit",
      "label": "steak (yield from 532 g raw meat)"
    }
  ],
  "name": "Beef, top sirloin, steak, separable lean and fat, trimmed to 0\" fat, choice, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 219.0,
    "fat_g": 10.5,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.96,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 218.0,
    "potassium_mg": 355.0,
    "protein_g": 29.0,
    "salt_g": 0.145,
    "sat_fat_g": 4.09,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169458",
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
