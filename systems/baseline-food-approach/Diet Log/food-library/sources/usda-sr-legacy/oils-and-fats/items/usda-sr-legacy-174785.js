/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "bag",
  "description": "Snacks",
  "id": "usda-sr-legacy-174785",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "bag",
      "kind": "unit",
      "label": "bag"
    },
    {
      "gramsPerUnit": 7.9,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Snacks, popcorn, microwave, regular (butter) flavor, made with partially hydrogenated oil",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 55.2,
    "energy_kcal": 2330.0,
    "fat_g": 34.0,
    "fibre_g": 10.0,
    "folate_ug": 15.0,
    "iron_mg": 1.85,
    "magnesium_mg": 94.0,
    "omega3_g": 0.069,
    "phosphorus_mg": 251.0,
    "potassium_mg": 240.0,
    "protein_g": 7.5,
    "salt_g": 1.91,
    "sat_fat_g": 7.22,
    "sodium_mg": 764.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 2.62,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174785",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "oils-and-fats",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
