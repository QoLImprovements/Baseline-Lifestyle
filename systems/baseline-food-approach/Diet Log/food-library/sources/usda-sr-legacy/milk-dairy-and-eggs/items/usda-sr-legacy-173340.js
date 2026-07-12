/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-makes-about-1-cup-prepared",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173340",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "serving-makes-about-1-cup-prepared",
      "kind": "unit",
      "label": "serving (makes about 1 cup prepared)"
    }
  ],
  "name": "Macaroni and cheese dinner with dry sauce mix, boxed, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 70.1,
    "energy_kcal": 1590.0,
    "fat_g": 4.82,
    "fibre_g": 3.2,
    "folate_ug": 204.0,
    "iron_mg": 2.75,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 331.0,
    "potassium_mg": 347.0,
    "protein_g": 13.9,
    "salt_g": 1.7,
    "sat_fat_g": 1.15,
    "sodium_mg": 680.0,
    "sugar_g": 9.61,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173340",
  "state": "Cooked",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "cooked",
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
