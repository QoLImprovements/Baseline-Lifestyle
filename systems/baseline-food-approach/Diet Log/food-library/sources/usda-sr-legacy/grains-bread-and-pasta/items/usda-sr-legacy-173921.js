/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173921",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER WHOLE HEARTS oat cereal",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 80.1,
    "energy_kcal": 1580.0,
    "fat_g": 5.61,
    "fibre_g": 9.1,
    "folate_ug": 1430.0,
    "iron_mg": 32.1,
    "magnesium_mg": 77.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 322.0,
    "potassium_mg": 568.0,
    "protein_g": 7.63,
    "salt_g": 1.385,
    "sat_fat_g": 0.839,
    "sodium_mg": 554.0,
    "sugar_g": 21.5,
    "vitamin_a_ug": 3960.0,
    "vitamin_c_mg": 71.3,
    "vitamin_e_mg": 5.58,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173921",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
