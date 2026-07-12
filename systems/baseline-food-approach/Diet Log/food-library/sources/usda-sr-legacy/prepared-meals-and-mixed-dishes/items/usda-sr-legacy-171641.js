/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-67-cup-1-serving-for-children-under-4-years",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "0-67-cup-1-serving-for-children-under-4-years",
      "kind": "unit",
      "label": "0.67 cup (1 serving for children under 4 years)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "cup-1-nlea-serving-for-adults",
      "kind": "unit",
      "label": "cup (1 NLEA serving for adults)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, ALPHA-BITS",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 80.3,
    "energy_kcal": 389.0,
    "fat_g": 4.6,
    "fibre_g": 7.1,
    "folate_ug": 667.0,
    "iron_mg": 30.0,
    "magnesium_mg": 99.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 309.0,
    "potassium_mg": 267.0,
    "protein_g": 10.0,
    "salt_g": 1.48,
    "sat_fat_g": 1.1,
    "sodium_mg": 592.0,
    "sugar_g": 21.0,
    "vitamin_a_ug": 741.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171641",
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
