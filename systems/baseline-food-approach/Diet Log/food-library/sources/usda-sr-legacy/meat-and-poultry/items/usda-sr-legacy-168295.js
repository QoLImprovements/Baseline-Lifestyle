/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-6-1-4-x-4-x-1-16-1-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-6-1-4-x-4-x-1-16-1-oz",
      "kind": "unit",
      "label": "slice (6-1/4\" x 4\" x 1/16\") (1 oz)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, cured, ham, boneless, extra lean and regular, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 2.28,
    "energy_kcal": 678.0,
    "fat_g": 8.39,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.9,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 236.0,
    "potassium_mg": 297.0,
    "protein_g": 18.3,
    "salt_g": 3.2,
    "sat_fat_g": 2.7,
    "sodium_mg": 1280.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168295",
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
