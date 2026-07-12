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
  "id": "usda-sr-legacy-175175",
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
      "gramsPerUnit": 315.0,
      "key": "can-drained-solids-total",
      "kind": "unit",
      "label": "can drained solids (total)"
    }
  ],
  "name": "Fish, salmon, pink, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 283.0,
    "carbs_g": 0.0,
    "energy_kcal": 138.0,
    "fat_g": 5.02,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.77,
    "magnesium_mg": 32.0,
    "omega3_g": 1.214,
    "phosphorus_mg": 379.0,
    "potassium_mg": 333.0,
    "protein_g": 23.1,
    "salt_g": 0.9525,
    "sat_fat_g": 0.895,
    "sodium_mg": 381.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175175",
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
