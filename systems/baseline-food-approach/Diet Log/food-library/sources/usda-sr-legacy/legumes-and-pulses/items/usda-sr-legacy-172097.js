/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172097",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chili con carne with beans, canned entree",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 13.1,
    "energy_kcal": 447.0,
    "fat_g": 3.47,
    "fibre_g": 3.3,
    "folate_ug": 21.0,
    "iron_mg": 1.34,
    "magnesium_mg": 28.0,
    "omega3_g": 0.117,
    "phosphorus_mg": 87.0,
    "potassium_mg": 264.0,
    "protein_g": 5.8,
    "salt_g": 1.1225,
    "sat_fat_g": 1.25,
    "sodium_mg": 449.0,
    "sugar_g": 1.87,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172097",
  "state": "Canned",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "meals-entrees-and-side-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
