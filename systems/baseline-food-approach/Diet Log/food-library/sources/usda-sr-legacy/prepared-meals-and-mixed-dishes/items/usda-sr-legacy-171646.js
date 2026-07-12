/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "oz",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171646",
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
      "gramsPerUnit": 122.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals ready-to-eat, granola, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 53.9,
    "energy_kcal": 2050.0,
    "fat_g": 24.3,
    "fibre_g": 8.9,
    "folate_ug": 84.0,
    "iron_mg": 3.95,
    "magnesium_mg": 168.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 431.0,
    "potassium_mg": 539.0,
    "protein_g": 13.7,
    "salt_g": 0.065,
    "sat_fat_g": 3.96,
    "sodium_mg": 26.0,
    "sugar_g": 19.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 11.1,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171646",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
