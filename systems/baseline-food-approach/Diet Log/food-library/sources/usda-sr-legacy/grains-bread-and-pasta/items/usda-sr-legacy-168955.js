/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "packet",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168955",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Pasta mix, Italian lasagna, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 73.8,
    "energy_kcal": 356.0,
    "fat_g": 1.97,
    "fibre_g": 2.8,
    "folate_ug": 113.0,
    "iron_mg": 2.87,
    "magnesium_mg": 37.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 124.0,
    "potassium_mg": 277.0,
    "protein_g": 10.9,
    "salt_g": 4.625,
    "sat_fat_g": 0.443,
    "sodium_mg": 1850.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 12.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168955",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "grains-bread-and-pasta",
    "meals-entrees-and-side-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
