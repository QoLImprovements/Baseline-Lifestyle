/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170568",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-whole-kernels",
      "kind": "unit",
      "label": "cup whole kernels"
    },
    {
      "gramsPerUnit": 9.1,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Nuts, almonds, blanched",
  "nutritionPerBasis": {
    "calcium_mg": 236.0,
    "carbs_g": 18.7,
    "energy_kcal": 2470.0,
    "fat_g": 52.5,
    "fibre_g": 9.9,
    "folate_ug": 49.0,
    "iron_mg": 3.28,
    "magnesium_mg": 268.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 481.0,
    "potassium_mg": 659.0,
    "protein_g": 21.4,
    "salt_g": 0.0475,
    "sat_fat_g": 3.95,
    "sodium_mg": 19.0,
    "sugar_g": 4.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 23.8,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170568",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
