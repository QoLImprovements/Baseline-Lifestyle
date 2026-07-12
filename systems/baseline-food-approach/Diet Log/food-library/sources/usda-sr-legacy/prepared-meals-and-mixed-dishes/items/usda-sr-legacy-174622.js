/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174622",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, Oatmeal Squares",
  "nutritionPerBasis": {
    "calcium_mg": 201.0,
    "carbs_g": 77.8,
    "energy_kcal": 1590.0,
    "fat_g": 4.83,
    "fibre_g": 8.3,
    "folate_ug": 722.0,
    "iron_mg": 29.3,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 371.0,
    "potassium_mg": 357.0,
    "protein_g": 11.4,
    "salt_g": 0.8675,
    "sat_fat_g": 0.873,
    "sodium_mg": 347.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 356.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 4.86,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174622",
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
