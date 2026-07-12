/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-melted",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup-melted",
      "kind": "unit",
      "label": "cup, melted"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    }
  ],
  "name": "Cheese, cheddar (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 710.0,
    "carbs_g": 3.37,
    "energy_kcal": 403.0,
    "fat_g": 33.3,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 0.14,
    "magnesium_mg": 27.0,
    "omega3_g": 0.136,
    "phosphorus_mg": 455.0,
    "potassium_mg": 76.0,
    "protein_g": 22.9,
    "salt_g": 1.6325,
    "sat_fat_g": 18.9,
    "sodium_mg": 653.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 337.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173414",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
