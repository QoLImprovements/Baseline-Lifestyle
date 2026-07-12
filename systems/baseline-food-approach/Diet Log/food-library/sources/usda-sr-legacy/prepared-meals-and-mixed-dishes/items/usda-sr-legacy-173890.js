/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-5-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173890",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-5-cup-1-nlea-serving",
      "kind": "unit",
      "label": "1.5 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, KING VITAMAN",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 83.8,
    "energy_kcal": 381.0,
    "fat_g": 3.44,
    "fibre_g": 3.4,
    "folate_ug": 1330.0,
    "iron_mg": 29.0,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 268.0,
    "protein_g": 6.41,
    "salt_g": 2.0625,
    "sat_fat_g": 1.58,
    "sodium_mg": 825.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 968.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 4.55,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173890",
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
