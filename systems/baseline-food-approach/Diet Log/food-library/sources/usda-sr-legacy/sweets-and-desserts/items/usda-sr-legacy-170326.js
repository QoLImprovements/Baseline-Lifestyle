/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "small-12-oz-cup",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "small-12-oz-cup",
      "kind": "unit",
      "label": "small 12 oz. cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "junior-6-oz-cup",
      "kind": "unit",
      "label": "junior 6 oz. cup"
    },
    {
      "gramsPerUnit": 298.0,
      "key": "medium-16-oz-cup",
      "kind": "unit",
      "label": "medium 16 oz. cup"
    }
  ],
  "name": "WENDY'S, Frosty Dairy Dessert",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 23.6,
    "energy_kcal": 132.0,
    "fat_g": 2.6,
    "fibre_g": 3.3,
    "folate_ug": 0.0,
    "iron_mg": 1.04,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 185.0,
    "protein_g": 3.49,
    "salt_g": 0.245,
    "sat_fat_g": 1.64,
    "sodium_mg": 98.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170326",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
