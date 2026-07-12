/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170924",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 6.3,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, curry powder",
  "nutritionPerBasis": {
    "calcium_mg": 525.0,
    "carbs_g": 55.8,
    "energy_kcal": 325.0,
    "fat_g": 14.0,
    "fibre_g": 53.2,
    "folate_ug": 56.0,
    "iron_mg": 19.1,
    "magnesium_mg": 255.0,
    "omega3_g": 0.255,
    "phosphorus_mg": 367.0,
    "potassium_mg": 1170.0,
    "protein_g": 14.3,
    "salt_g": 0.13,
    "sat_fat_g": 1.65,
    "sodium_mg": 52.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 25.2,
    "vitamin_k_ug": 99.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170924",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "prepared-meals-and-mixed-dishes",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
