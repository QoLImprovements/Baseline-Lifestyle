/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-1-serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173330",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "cup-1-serving",
      "kind": "unit",
      "label": "cup (1 serving)"
    }
  ],
  "name": "Beef stew, canned entree",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 7.85,
    "energy_kcal": 413.0,
    "fat_g": 5.53,
    "fibre_g": 0.9,
    "folate_ug": 14.0,
    "iron_mg": 2.48,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 163.0,
    "protein_g": 4.41,
    "salt_g": 0.97,
    "sat_fat_g": 2.18,
    "sodium_mg": 388.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173330",
  "state": "Canned",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "canned",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
