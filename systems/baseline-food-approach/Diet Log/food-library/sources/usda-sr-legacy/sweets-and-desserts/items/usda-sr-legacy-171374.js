/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
  "name": "Babyfood, dessert, fruit pudding, orange, strained",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 17.7,
    "energy_kcal": 335.0,
    "fat_g": 0.9,
    "fibre_g": 0.6,
    "folate_ug": 8.0,
    "iron_mg": 0.1,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 86.0,
    "protein_g": 1.1,
    "salt_g": 0.05,
    "sat_fat_g": 0.545,
    "sodium_mg": 20.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171374",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
