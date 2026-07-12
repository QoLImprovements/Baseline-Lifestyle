/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-172371",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Margarine-like spread, SMART BALANCE Regular Buttery Spread with flax oil",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 0.14,
    "energy_kcal": 2440.0,
    "fat_g": 64.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 3.38,
    "phosphorus_mg": 4.0,
    "potassium_mg": 28.0,
    "protein_g": 0.14,
    "salt_g": 1.615,
    "sat_fat_g": 16.7,
    "sodium_mg": 646.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3820.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 19.3,
    "vitamin_k_ug": 55.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172371",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
