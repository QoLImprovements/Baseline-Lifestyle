/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "pancake-6-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "pancake-6-dia",
      "kind": "unit",
      "label": "pancake (6\" dia)"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "pancake-4-dia",
      "kind": "unit",
      "label": "pancake (4\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pancakes, plain, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 219.0,
    "carbs_g": 28.3,
    "energy_kcal": 950.0,
    "fat_g": 9.7,
    "fibre_g": 0.0,
    "folate_ug": 38.0,
    "iron_mg": 1.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 159.0,
    "potassium_mg": 132.0,
    "protein_g": 6.4,
    "salt_g": 1.0975,
    "sat_fat_g": 2.12,
    "sodium_mg": 439.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175009",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
