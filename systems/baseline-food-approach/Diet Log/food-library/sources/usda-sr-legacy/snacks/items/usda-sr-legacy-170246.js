/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "cup",
  "description": "Snacks",
  "id": "usda-sr-legacy-170246",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, popcorn, air-popped (Unsalted)",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 77.9,
    "energy_kcal": 1600.0,
    "fat_g": 4.2,
    "fibre_g": 15.1,
    "folate_ug": 23.0,
    "iron_mg": 2.66,
    "magnesium_mg": 131.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 301.0,
    "protein_g": 12.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.57,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170246",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
