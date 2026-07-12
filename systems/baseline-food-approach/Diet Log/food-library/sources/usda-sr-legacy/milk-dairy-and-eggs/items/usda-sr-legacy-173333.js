/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-1-serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173333",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "cup-1-serving",
      "kind": "unit",
      "label": "cup 1 serving"
    }
  ],
  "name": "Lasagna, cheese, frozen, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 13.8,
    "energy_kcal": 542.0,
    "fat_g": 5.33,
    "fibre_g": 1.7,
    "folate_ug": 32.0,
    "iron_mg": 1.27,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 182.0,
    "protein_g": 6.54,
    "salt_g": 0.71,
    "sat_fat_g": 2.11,
    "sodium_mg": 284.0,
    "sugar_g": 4.23,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 17.1,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173333",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
