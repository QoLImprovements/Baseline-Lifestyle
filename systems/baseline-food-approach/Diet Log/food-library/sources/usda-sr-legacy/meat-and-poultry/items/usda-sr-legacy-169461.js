/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-1serving",
  "description": "Beef Products",
  "id": "usda-sr-legacy-169461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-1serving",
      "kind": "unit",
      "label": "3 oz ( 1serving )"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 0\" fat, USDA select, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 267.0,
    "fat_g": 18.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.91,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 191.0,
    "potassium_mg": 330.0,
    "protein_g": 24.5,
    "salt_g": 0.1625,
    "sat_fat_g": 7.04,
    "sodium_mg": 65.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169461",
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
