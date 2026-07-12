/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "5-pieces-1-serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169773",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "5-pieces-1-serving",
      "kind": "unit",
      "label": "5 pieces 1 serving"
    }
  ],
  "name": "Potsticker or wonton, pork and vegetable, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 13.3,
    "energy_kcal": 568.0,
    "fat_g": 5.52,
    "fibre_g": 1.4,
    "folate_ug": 18.0,
    "iron_mg": 0.74,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 284.0,
    "protein_g": 8.28,
    "salt_g": 1.1025,
    "sat_fat_g": 1.72,
    "sodium_mg": 441.0,
    "sugar_g": 2.76,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 8.3,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 55.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169773",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
