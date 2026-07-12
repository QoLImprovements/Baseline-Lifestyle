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
  "id": "usda-sr-legacy-171373",
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
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, dessert, cherry vanilla pudding, junior",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 18.4,
    "energy_kcal": 289.0,
    "fat_g": 0.2,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.17,
    "magnesium_mg": 2.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 7.0,
    "potassium_mg": 33.0,
    "protein_g": 0.2,
    "salt_g": 0.0,
    "sat_fat_g": 0.058,
    "sodium_mg": 0.0,
    "sugar_g": 17.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171373",
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
