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
  "id": "usda-sr-legacy-170941",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
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
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, vegetables, spinach, creamed, strained",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 5.7,
    "energy_kcal": 155.0,
    "fat_g": 1.3,
    "fibre_g": 1.8,
    "folate_ug": 61.0,
    "iron_mg": 0.62,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 191.0,
    "protein_g": 2.5,
    "salt_g": 0.1225,
    "sat_fat_g": 0.702,
    "sodium_mg": 49.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 227.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 197.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170941",
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
