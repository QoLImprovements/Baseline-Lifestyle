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
  "id": "usda-sr-legacy-170982",
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
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    }
  ],
  "name": "Babyfood, dessert, fruit pudding, pineapple, strained",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 20.3,
    "energy_kcal": 339.0,
    "fat_g": 0.3,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.18,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 31.0,
    "potassium_mg": 81.0,
    "protein_g": 1.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.099,
    "sodium_mg": 0.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 27.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170982",
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
