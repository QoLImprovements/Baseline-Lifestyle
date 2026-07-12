/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "oz-boneless",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-boneless",
      "kind": "unit",
      "label": "oz, boneless"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "piece-1-3-4-x-7-8-x-1-2",
      "kind": "unit",
      "label": "piece (1-3/4\" x 7/8\" x 1/2\")"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fish, herring, Atlantic, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 9.64,
    "energy_kcal": 1100.0,
    "fat_g": 18.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.22,
    "magnesium_mg": 8.0,
    "omega3_g": 1.468,
    "phosphorus_mg": 89.0,
    "potassium_mg": 69.0,
    "protein_g": 14.2,
    "salt_g": 2.175,
    "sat_fat_g": 2.38,
    "sodium_mg": 870.0,
    "sugar_g": 7.71,
    "vitamin_a_ug": 258.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175118",
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
