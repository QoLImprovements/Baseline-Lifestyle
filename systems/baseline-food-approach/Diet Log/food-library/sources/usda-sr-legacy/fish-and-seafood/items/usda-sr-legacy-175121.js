/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175121",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-boneless",
      "kind": "unit",
      "label": "oz, boneless"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 361.0,
      "key": "can-15-oz",
      "kind": "unit",
      "label": "can (15 oz)"
    }
  ],
  "name": "Fish, mackerel, jack, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 241.0,
    "carbs_g": 0.0,
    "energy_kcal": 653.0,
    "fat_g": 6.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.04,
    "magnesium_mg": 37.0,
    "omega3_g": 1.334,
    "phosphorus_mg": 301.0,
    "potassium_mg": 194.0,
    "protein_g": 23.2,
    "salt_g": 0.9475,
    "sat_fat_g": 1.86,
    "sodium_mg": 379.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175121",
  "state": "Canned",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "canned",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
