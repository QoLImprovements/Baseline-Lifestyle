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
  "id": "usda-sr-legacy-168138",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS, honey roasted",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 81.2,
    "energy_kcal": 1680.0,
    "fat_g": 5.46,
    "fibre_g": 4.2,
    "folate_ug": 667.0,
    "iron_mg": 34.8,
    "magnesium_mg": 50.0,
    "omega3_g": 0.089,
    "phosphorus_mg": 156.0,
    "potassium_mg": 209.0,
    "protein_g": 7.12,
    "salt_g": 1.135,
    "sat_fat_g": 0.64,
    "sodium_mg": 454.0,
    "sugar_g": 19.8,
    "vitamin_a_ug": 806.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168138",
  "state": "Roasted",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
