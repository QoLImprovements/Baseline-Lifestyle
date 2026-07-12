/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "BURGER KING, Cheeseburger",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 23.7,
    "energy_kcal": 1200.0,
    "fat_g": 14.8,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 2.5,
    "magnesium_mg": 24.0,
    "omega3_g": 0.123,
    "phosphorus_mg": 143.0,
    "potassium_mg": 178.0,
    "protein_g": 14.6,
    "salt_g": 1.505,
    "sat_fat_g": 6.84,
    "sodium_mg": 602.0,
    "sugar_g": 4.49,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170329",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
