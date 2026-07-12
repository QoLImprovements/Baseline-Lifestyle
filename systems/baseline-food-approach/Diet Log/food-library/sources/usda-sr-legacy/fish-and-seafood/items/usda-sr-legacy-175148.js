/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "piece-4-1-2-x-2-1-8-x-7-8",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175148",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "piece-4-1-2-x-2-1-8-x-7-8",
      "kind": "unit",
      "label": "piece (4-1/2\" x 2-1/8\" x 7/8\")"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup-cooked",
      "kind": "unit",
      "label": "cup, cooked"
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
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Fish, sturgeon, mixed species, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 565.0,
    "fat_g": 5.18,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.9,
    "magnesium_mg": 45.0,
    "omega3_g": 0.426,
    "phosphorus_mg": 271.0,
    "potassium_mg": 364.0,
    "protein_g": 20.7,
    "salt_g": 0.1725,
    "sat_fat_g": 1.17,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 263.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175148",
  "state": "Cooked",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "cooked",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
