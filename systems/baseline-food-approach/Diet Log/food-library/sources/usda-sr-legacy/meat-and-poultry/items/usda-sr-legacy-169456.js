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
  "id": "usda-sr-legacy-169456",
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
      "gramsPerUnit": 150.0,
      "key": "steak-yield-from-186-g-raw-meat",
      "kind": "unit",
      "label": "steak (yield from 186 g raw meat)"
    }
  ],
  "name": "Beef, loin, top loin steak, boneless, lip off, separable lean only, trimmed to 0\" fat, select, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 790.0,
    "fat_g": 6.74,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.25,
    "magnesium_mg": 15.0,
    "omega3_g": 0.025,
    "phosphorus_mg": 277.0,
    "potassium_mg": 375.0,
    "protein_g": 30.0,
    "salt_g": 0.145,
    "sat_fat_g": 2.68,
    "sodium_mg": 58.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169456",
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
