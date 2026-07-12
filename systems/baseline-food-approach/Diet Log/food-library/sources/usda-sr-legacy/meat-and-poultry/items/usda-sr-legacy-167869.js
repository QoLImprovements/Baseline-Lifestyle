/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-slices-6-per-6-oz-pkg",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167869",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-slices-6-per-6-oz-pkg",
      "kind": "unit",
      "label": "2 slices (6 per 6-oz pkg.)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "package-6-oz",
      "kind": "unit",
      "label": "package (6 oz)"
    }
  ],
  "name": "Canadian bacon, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.34,
    "energy_kcal": 110.0,
    "fat_g": 2.62,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.44,
    "magnesium_mg": 20.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 240.0,
    "potassium_mg": 683.0,
    "protein_g": 20.3,
    "salt_g": 1.8775,
    "sat_fat_g": 0.9,
    "sodium_mg": 751.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167869",
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
