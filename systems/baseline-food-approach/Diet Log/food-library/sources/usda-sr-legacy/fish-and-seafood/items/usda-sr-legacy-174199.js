/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cubic-inch-boneless",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174199",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
  "name": "Fish, haddock, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 0.0,
    "energy_kcal": 485.0,
    "fat_g": 0.96,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.4,
    "magnesium_mg": 54.0,
    "omega3_g": 0.272,
    "phosphorus_mg": 251.0,
    "potassium_mg": 415.0,
    "protein_g": 25.2,
    "salt_g": 1.9075,
    "sat_fat_g": 0.173,
    "sodium_mg": 763.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174199",
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
