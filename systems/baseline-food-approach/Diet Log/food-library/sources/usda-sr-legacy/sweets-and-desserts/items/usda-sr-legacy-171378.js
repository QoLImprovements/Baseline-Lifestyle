/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171378",
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
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, dessert, tropical fruit, junior",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 16.4,
    "energy_kcal": 251.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.26,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 58.0,
    "protein_g": 0.2,
    "salt_g": 0.0175,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 18.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171378",
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
