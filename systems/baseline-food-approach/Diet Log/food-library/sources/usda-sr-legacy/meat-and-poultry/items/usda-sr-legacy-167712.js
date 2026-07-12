/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167712",
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
      "gramsPerUnit": 8.0,
      "key": "slice-cooked",
      "kind": "unit",
      "label": "slice cooked"
    }
  ],
  "name": "Pork, cured, bacon, cooked, broiled, pan-fried or roasted, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 1.43,
    "energy_kcal": 541.0,
    "fat_g": 41.8,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.44,
    "magnesium_mg": 33.0,
    "omega3_g": 0.2,
    "phosphorus_mg": 533.0,
    "potassium_mg": 565.0,
    "protein_g": 37.0,
    "salt_g": 2.575,
    "sat_fat_g": 13.7,
    "sodium_mg": 1030.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167712",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
