/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172102",
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
      "gramsPerUnit": 116.0,
      "key": "burrito-cooked",
      "kind": "unit",
      "label": "burrito cooked"
    }
  ],
  "name": "Burrito, beef and bean, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 39.0,
    "energy_kcal": 298.0,
    "fat_g": 11.9,
    "fibre_g": 6.9,
    "folate_ug": 76.0,
    "iron_mg": 3.12,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 271.0,
    "protein_g": 8.73,
    "salt_g": 1.6475,
    "sat_fat_g": 4.07,
    "sodium_mg": 659.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172102",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
