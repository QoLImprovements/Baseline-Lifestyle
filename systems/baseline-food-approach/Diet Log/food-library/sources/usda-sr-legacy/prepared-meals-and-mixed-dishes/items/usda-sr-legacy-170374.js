/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "BURGER KING, Double Cheeseburger",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 17.4,
    "energy_kcal": 1180.0,
    "fat_g": 16.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.33,
    "magnesium_mg": 23.0,
    "omega3_g": 0.124,
    "phosphorus_mg": 168.0,
    "potassium_mg": 231.0,
    "protein_g": 16.8,
    "salt_g": 1.405,
    "sat_fat_g": 6.92,
    "sodium_mg": 562.0,
    "sugar_g": 4.17,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170374",
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
