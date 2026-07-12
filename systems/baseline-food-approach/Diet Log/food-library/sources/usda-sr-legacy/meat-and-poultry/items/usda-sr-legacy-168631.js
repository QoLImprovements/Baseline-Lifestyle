/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak-yield-from-186-g-raw-meat",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "steak-yield-from-186-g-raw-meat",
      "kind": "unit",
      "label": "steak (yield from 186 g raw meat)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, loin, top loin steak, boneless, lip off, separable lean and fat, trimmed to 0\" fat, select, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 865.0,
    "fat_g": 9.12,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.23,
    "magnesium_mg": 15.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 274.0,
    "potassium_mg": 371.0,
    "protein_g": 29.2,
    "salt_g": 0.1425,
    "sat_fat_g": 3.67,
    "sodium_mg": 57.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168631",
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
