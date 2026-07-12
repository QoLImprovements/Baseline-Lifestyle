/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "small",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174214",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 14.5,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "lb-with-shell-yield-after-shell-removed",
      "kind": "unit",
      "label": "lb (with shell), yield after shell removed"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "cup-with-liquid-and-clams",
      "kind": "unit",
      "label": "cup (with liquid and clams)"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Mollusks, clam, mixed species, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 3.57,
    "energy_kcal": 86.0,
    "fat_g": 0.96,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.62,
    "magnesium_mg": 19.0,
    "omega3_g": 0.129,
    "phosphorus_mg": 198.0,
    "potassium_mg": 46.0,
    "protein_g": 14.7,
    "salt_g": 1.5025,
    "sat_fat_g": 0.187,
    "sodium_mg": 601.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174214",
  "state": "Raw",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
