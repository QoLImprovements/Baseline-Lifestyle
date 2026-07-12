/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174936",
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
      "gramsPerUnit": 90.0,
      "key": "piece-1-6-of-19-oz-cake",
      "kind": "unit",
      "label": "piece (1/6 of 19 oz cake)"
    }
  ],
  "name": "Cake, coffeecake, creme-filled with chocolate frosting",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 53.8,
    "energy_kcal": 1380.0,
    "fat_g": 10.8,
    "fibre_g": 2.0,
    "folate_ug": 41.0,
    "iron_mg": 0.51,
    "magnesium_mg": 15.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 75.0,
    "potassium_mg": 78.0,
    "protein_g": 5.0,
    "salt_g": 0.8075,
    "sat_fat_g": 2.83,
    "sodium_mg": 323.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174936",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
