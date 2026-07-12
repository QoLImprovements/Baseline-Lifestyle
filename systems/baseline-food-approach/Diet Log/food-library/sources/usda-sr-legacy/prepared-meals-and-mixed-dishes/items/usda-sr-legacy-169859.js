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
  "id": "usda-sr-legacy-169859",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS, with almonds",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 79.6,
    "energy_kcal": 409.0,
    "fat_g": 7.3,
    "fibre_g": 5.5,
    "folate_ug": 625.0,
    "iron_mg": 33.8,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 172.0,
    "potassium_mg": 211.0,
    "protein_g": 7.7,
    "salt_g": 1.0425,
    "sat_fat_g": 0.8,
    "sodium_mg": 417.0,
    "sugar_g": 20.0,
    "vitamin_a_ug": 680.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169859",
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
