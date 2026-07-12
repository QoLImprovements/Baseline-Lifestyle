/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "serving-3-t-dry-cereal-plus-1-cup-water",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 268.0,
      "key": "serving-3-t-dry-cereal-plus-1-cup-water",
      "kind": "unit",
      "label": "serving (3 T dry cereal plus 1 cup water)"
    }
  ],
  "name": "Cereals, MALT-O-MEAL, original, plain, prepared with water, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 10.1,
    "energy_kcal": 199.0,
    "fat_g": 0.09,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 5.19,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 14.0,
    "protein_g": 1.67,
    "salt_g": 0.0,
    "sat_fat_g": 0.01,
    "sodium_mg": 0.0,
    "sugar_g": 0.13,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174651",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
