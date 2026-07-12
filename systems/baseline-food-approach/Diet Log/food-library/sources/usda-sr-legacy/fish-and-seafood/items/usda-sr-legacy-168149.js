/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup-cooked",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-168149",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 80.0,
      "key": "piece-5-1-2-x-1-1-2-x-1-2",
      "kind": "unit",
      "label": "piece (5-1/2\" x 1-1/2\" x 1/2\")"
    }
  ],
  "name": "Fish, mackerel, salted",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 0.0,
    "energy_kcal": 305.0,
    "fat_g": 25.1,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.4,
    "magnesium_mg": 60.0,
    "omega3_g": 4.971,
    "phosphorus_mg": 254.0,
    "potassium_mg": 520.0,
    "protein_g": 18.5,
    "salt_g": 11.125,
    "sat_fat_g": 7.15,
    "sodium_mg": 4450.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.38,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168149",
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
