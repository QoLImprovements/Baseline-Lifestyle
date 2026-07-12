/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172990",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, Frosted Flakes",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 90.2,
    "energy_kcal": 389.0,
    "fat_g": 0.87,
    "fibre_g": 1.2,
    "folate_ug": 323.0,
    "iron_mg": 11.6,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 82.0,
    "protein_g": 4.25,
    "salt_g": 1.1275,
    "sat_fat_g": 0.107,
    "sodium_mg": 451.0,
    "sugar_g": 39.3,
    "vitamin_a_ug": 454.0,
    "vitamin_c_mg": 19.4,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172990",
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
