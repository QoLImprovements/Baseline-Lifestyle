/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172274",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, vegetables, squash, strained",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 5.73,
    "energy_kcal": 28.0,
    "fat_g": 0.2,
    "fibre_g": 0.9,
    "folate_ug": 8.0,
    "iron_mg": 0.32,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 185.0,
    "protein_g": 0.81,
    "salt_g": 0.0125,
    "sat_fat_g": 0.02,
    "sodium_mg": 5.0,
    "sugar_g": 3.37,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172274",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
