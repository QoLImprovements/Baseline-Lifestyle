/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-6-oz-pkg",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174592",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.8,
      "key": "slice-6-oz-pkg",
      "kind": "unit",
      "label": "slice 6 oz pkg"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "slice-12-oz-pkg",
      "kind": "unit",
      "label": "slice 12 oz pkg"
    }
  ],
  "name": "Bacon, turkey, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 1.89,
    "energy_kcal": 226.0,
    "fat_g": 16.9,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.264,
    "phosphorus_mg": 222.0,
    "potassium_mg": 349.0,
    "protein_g": 15.9,
    "salt_g": 2.675,
    "sat_fat_g": 4.52,
    "sodium_mg": 1070.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174592",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
