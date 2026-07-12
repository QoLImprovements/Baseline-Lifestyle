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
  "id": "usda-sr-legacy-174183",
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
      "gramsPerUnit": 20.0,
      "key": "5-anchovies",
      "kind": "unit",
      "label": "5 anchovies"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "anchovy",
      "kind": "unit",
      "label": "anchovy"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "can-2-oz",
      "kind": "unit",
      "label": "can (2 oz)"
    }
  ],
  "name": "Fish, anchovy, european, canned in oil, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 232.0,
    "carbs_g": 0.0,
    "energy_kcal": 879.0,
    "fat_g": 9.71,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 4.63,
    "magnesium_mg": 69.0,
    "omega3_g": 2.094,
    "phosphorus_mg": 252.0,
    "potassium_mg": 544.0,
    "protein_g": 28.9,
    "salt_g": 9.175,
    "sat_fat_g": 2.2,
    "sodium_mg": 3670.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.33,
    "vitamin_k_ug": 12.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174183",
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
