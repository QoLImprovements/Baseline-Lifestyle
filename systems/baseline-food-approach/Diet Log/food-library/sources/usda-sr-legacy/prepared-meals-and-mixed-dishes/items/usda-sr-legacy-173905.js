/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "tbsp",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173905",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 234.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "0-75-cup",
      "kind": "unit",
      "label": "0.75 cup"
    }
  ],
  "name": "Cereals, oats, regular and quick, unenriched, cooked with water (includes boiling and microwaving), without salt",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 12.0,
    "energy_kcal": 297.0,
    "fat_g": 1.52,
    "fibre_g": 1.7,
    "folate_ug": 6.0,
    "iron_mg": 0.9,
    "magnesium_mg": 27.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 77.0,
    "potassium_mg": 70.0,
    "protein_g": 2.54,
    "salt_g": 0.01,
    "sat_fat_g": 0.31,
    "sodium_mg": 4.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173905",
  "state": "Cooked",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "cooked",
    "prepared-meals-and-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
