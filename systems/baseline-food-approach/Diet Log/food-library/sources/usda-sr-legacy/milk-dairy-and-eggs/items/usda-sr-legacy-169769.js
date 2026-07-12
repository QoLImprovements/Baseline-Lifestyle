/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-4-oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "serving-4-oz",
      "kind": "unit",
      "label": "serving (4 oz)"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "serving-3-5-oz",
      "kind": "unit",
      "label": "serving (3.5 oz)"
    }
  ],
  "name": "Macaroni and cheese, box mix with cheese sauce, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 46.7,
    "energy_kcal": 1400.0,
    "fat_g": 10.7,
    "fibre_g": 1.8,
    "folate_ug": 134.0,
    "iron_mg": 2.07,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 391.0,
    "potassium_mg": 197.0,
    "protein_g": 12.7,
    "salt_g": 1.915,
    "sat_fat_g": 1.18,
    "sodium_mg": 766.0,
    "sugar_g": 6.43,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169769",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
