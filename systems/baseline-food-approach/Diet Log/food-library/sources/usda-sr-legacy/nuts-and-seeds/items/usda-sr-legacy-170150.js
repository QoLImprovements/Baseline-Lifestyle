/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "cup",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170150",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Seeds, sesame seeds, whole, dried",
  "nutritionPerBasis": {
    "calcium_mg": 975.0,
    "carbs_g": 23.4,
    "energy_kcal": 2400.0,
    "fat_g": 49.7,
    "fibre_g": 11.8,
    "folate_ug": 97.0,
    "iron_mg": 14.6,
    "magnesium_mg": 351.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 629.0,
    "potassium_mg": 468.0,
    "protein_g": 17.7,
    "salt_g": 0.0275,
    "sat_fat_g": 6.96,
    "sodium_mg": 11.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170150",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
