/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "3-oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173712",
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
      "gramsPerUnit": 17.0,
      "key": "cubic-inch-boneless",
      "kind": "unit",
      "label": "cubic inch, boneless"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-boneless",
      "kind": "unit",
      "label": "oz, boneless"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup-cooked",
      "kind": "unit",
      "label": "cup, cooked"
    }
  ],
  "name": "Fish, whitefish, mixed species, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 452.0,
    "fat_g": 0.93,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.5,
    "magnesium_mg": 23.0,
    "omega3_g": 0.209,
    "phosphorus_mg": 132.0,
    "potassium_mg": 423.0,
    "protein_g": 23.4,
    "salt_g": 2.55,
    "sat_fat_g": 0.228,
    "sodium_mg": 1020.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173712",
  "state": "Unspecified",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
