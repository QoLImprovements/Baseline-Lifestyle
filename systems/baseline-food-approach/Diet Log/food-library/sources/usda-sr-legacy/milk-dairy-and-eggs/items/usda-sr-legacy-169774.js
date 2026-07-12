/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-3-5-oz",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169774",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "serving-3-5-oz",
      "kind": "unit",
      "label": "serving (3.5 oz)"
    }
  ],
  "name": "Macaroni or noodles with cheese, made from reduced fat packaged mix, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 202.0,
    "carbs_g": 52.1,
    "energy_kcal": 1240.0,
    "fat_g": 4.03,
    "fibre_g": 2.0,
    "folate_ug": 138.0,
    "iron_mg": 1.81,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 403.0,
    "potassium_mg": 203.0,
    "protein_g": 13.1,
    "salt_g": 2.1675,
    "sat_fat_g": 0.409,
    "sodium_mg": 867.0,
    "sugar_g": 5.04,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169774",
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
