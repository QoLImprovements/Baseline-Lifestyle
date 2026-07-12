/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168742",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1327.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean only, trimmed to 0\" fat, select, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 559.0,
    "fat_g": 5.71,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 2.21,
    "magnesium_mg": 21.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 200.0,
    "potassium_mg": 393.0,
    "protein_g": 20.5,
    "salt_g": 0.215,
    "sat_fat_g": 1.61,
    "sodium_mg": 86.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168742",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
