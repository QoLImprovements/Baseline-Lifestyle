/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tbsp",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-168604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Seeds, sesame butter, tahini, type of kernels unspecified",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 21.5,
    "energy_kcal": 2480.0,
    "fat_g": 53.0,
    "fibre_g": 4.7,
    "folate_ug": 98.0,
    "iron_mg": 4.42,
    "magnesium_mg": 95.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 790.0,
    "potassium_mg": 459.0,
    "protein_g": 17.4,
    "salt_g": 0.0875,
    "sat_fat_g": 7.42,
    "sodium_mg": 35.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168604",
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
