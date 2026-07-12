/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-shank",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-shank",
      "kind": "unit",
      "label": "3 oz shank"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-shank",
      "kind": "unit",
      "label": "lb shank"
    }
  ],
  "name": "Pork, cured, ham with natural juices, shank, bone-in, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.32,
    "energy_kcal": 797.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.01,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 233.0,
    "potassium_mg": 279.0,
    "protein_g": 22.4,
    "salt_g": 1.9475,
    "sat_fat_g": 3.61,
    "sodium_mg": 779.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168343",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
