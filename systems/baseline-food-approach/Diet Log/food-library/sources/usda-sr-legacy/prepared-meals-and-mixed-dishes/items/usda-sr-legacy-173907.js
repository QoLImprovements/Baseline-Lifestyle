/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "packet",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173907",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, maple and brown sugar, dry",
  "nutritionPerBasis": {
    "calcium_mg": 226.0,
    "carbs_g": 76.9,
    "energy_kcal": 1540.0,
    "fat_g": 4.63,
    "fibre_g": 7.2,
    "folate_ug": 128.0,
    "iron_mg": 8.22,
    "magnesium_mg": 88.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 297.0,
    "potassium_mg": 424.0,
    "protein_g": 9.2,
    "salt_g": 1.265,
    "sat_fat_g": 0.793,
    "sodium_mg": 506.0,
    "sugar_g": 30.0,
    "vitamin_a_ug": 520.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173907",
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
