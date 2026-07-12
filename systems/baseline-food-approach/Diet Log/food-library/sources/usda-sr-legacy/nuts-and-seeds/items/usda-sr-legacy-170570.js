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
  "id": "usda-sr-legacy-170570",
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
      "gramsPerUnit": 3.0,
      "key": "nutmeat",
      "kind": "unit",
      "label": "nutmeat"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Nuts, butternuts, dried",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 12.0,
    "energy_kcal": 2560.0,
    "fat_g": 57.0,
    "fibre_g": 4.7,
    "folate_ug": 66.0,
    "iron_mg": 4.02,
    "magnesium_mg": 237.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 446.0,
    "potassium_mg": 421.0,
    "protein_g": 24.9,
    "salt_g": 0.0025,
    "sat_fat_g": 1.31,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170570",
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
