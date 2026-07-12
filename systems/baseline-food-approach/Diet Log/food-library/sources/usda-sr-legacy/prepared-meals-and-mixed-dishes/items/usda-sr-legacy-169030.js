/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169030",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 437.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CARRABBA'S ITALIAN GRILL, lasagne",
  "nutritionPerBasis": {
    "calcium_mg": 185.0,
    "carbs_g": 12.4,
    "energy_kcal": 191.0,
    "fat_g": 11.1,
    "fibre_g": 1.3,
    "folate_ug": 16.0,
    "iron_mg": 0.74,
    "magnesium_mg": 24.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 176.0,
    "potassium_mg": 266.0,
    "protein_g": 10.5,
    "salt_g": 1.31,
    "sat_fat_g": 4.37,
    "sodium_mg": 524.0,
    "sugar_g": 2.77,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169030",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "prepared-meals-and-mixed-dishes",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
