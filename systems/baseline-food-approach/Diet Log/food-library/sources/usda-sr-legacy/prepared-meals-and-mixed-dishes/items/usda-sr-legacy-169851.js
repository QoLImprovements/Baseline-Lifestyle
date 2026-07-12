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
  "id": "usda-sr-legacy-169851",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 422.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "OLIVE GARDEN, lasagna classico",
  "nutritionPerBasis": {
    "calcium_mg": 211.0,
    "carbs_g": 10.3,
    "energy_kcal": 770.0,
    "fat_g": 10.8,
    "fibre_g": 1.6,
    "folate_ug": 35.0,
    "iron_mg": 0.75,
    "magnesium_mg": 22.0,
    "omega3_g": 0.069,
    "phosphorus_mg": 183.0,
    "potassium_mg": 258.0,
    "protein_g": 11.3,
    "salt_g": 1.125,
    "sat_fat_g": 5.35,
    "sodium_mg": 450.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169851",
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
