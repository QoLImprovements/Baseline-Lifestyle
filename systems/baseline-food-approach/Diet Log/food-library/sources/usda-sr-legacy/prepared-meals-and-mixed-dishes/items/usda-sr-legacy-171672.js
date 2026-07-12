/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals, corn grits, yellow, regular and quick, enriched, cooked with water, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 13.9,
    "energy_kcal": 273.0,
    "fat_g": 0.39,
    "fibre_g": 0.7,
    "folate_ug": 27.0,
    "iron_mg": 0.57,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 22.0,
    "protein_g": 1.23,
    "salt_g": 0.005,
    "sat_fat_g": 0.06,
    "sodium_mg": 2.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171672",
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
