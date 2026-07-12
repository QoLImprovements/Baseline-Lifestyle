/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "cup-sliced",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "oz-cooked-yield",
      "kind": "unit",
      "label": "oz cooked, yield"
    }
  ],
  "name": "Mollusks, conch, baked or broiled",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 1.7,
    "energy_kcal": 130.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 179.0,
    "iron_mg": 1.41,
    "magnesium_mg": 238.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 217.0,
    "potassium_mg": 163.0,
    "protein_g": 26.3,
    "salt_g": 0.3825,
    "sat_fat_g": 0.37,
    "sodium_mg": 153.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.33,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173720",
  "state": "Baked",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "baked",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
