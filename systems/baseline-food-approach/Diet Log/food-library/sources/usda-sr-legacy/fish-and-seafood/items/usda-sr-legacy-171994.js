/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "fillet",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171994",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch-boneless",
      "kind": "unit",
      "label": "cubic inch, boneless"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-boneless",
      "kind": "unit",
      "label": "oz, boneless"
    }
  ],
  "name": "Fish, mackerel, Pacific and jack, mixed species, cooked, dry heat",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 0.0,
    "energy_kcal": 841.0,
    "fat_g": 10.1,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.49,
    "magnesium_mg": 36.0,
    "omega3_g": 2.011,
    "phosphorus_mg": 160.0,
    "potassium_mg": 521.0,
    "protein_g": 25.7,
    "salt_g": 0.275,
    "sat_fat_g": 2.88,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171994",
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
