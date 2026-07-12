/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171415",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 232.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 4.8,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Margarine,spread, 35-39% fat, tub",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.52,
    "energy_kcal": 349.0,
    "fat_g": 38.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.04,
    "magnesium_mg": 1.0,
    "omega3_g": 2.2,
    "phosphorus_mg": 7.0,
    "potassium_mg": 51.0,
    "protein_g": 0.23,
    "salt_g": 1.46,
    "sat_fat_g": 8.66,
    "sodium_mg": 584.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1350.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 13.4,
    "vitamin_k_ug": 74.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171415",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
