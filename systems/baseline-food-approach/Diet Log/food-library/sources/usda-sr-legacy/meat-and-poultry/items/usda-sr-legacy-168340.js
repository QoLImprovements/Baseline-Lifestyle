/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-spiral-slice",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168340",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-spiral-slice",
      "kind": "unit",
      "label": "3 oz spiral slice"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-spiral-slice",
      "kind": "unit",
      "label": "lb spiral slice"
    }
  ],
  "name": "Pork, cured, ham with natural juices, spiral slice, boneless, separable lean only, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 1.22,
    "energy_kcal": 455.0,
    "fat_g": 3.26,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.76,
    "magnesium_mg": 20.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 283.0,
    "potassium_mg": 317.0,
    "protein_g": 19.2,
    "salt_g": 2.2375,
    "sat_fat_g": 1.01,
    "sodium_mg": 895.0,
    "sugar_g": 1.22,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168340",
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
