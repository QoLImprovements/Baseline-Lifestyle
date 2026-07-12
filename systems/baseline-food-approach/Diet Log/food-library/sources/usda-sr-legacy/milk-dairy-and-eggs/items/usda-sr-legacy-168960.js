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
  "id": "usda-sr-legacy-168960",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "cup-1-serving",
      "kind": "unit",
      "label": "cup 1 serving"
    }
  ],
  "name": "Lasagna, cheese, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 21.6,
    "energy_kcal": 145.0,
    "fat_g": 4.22,
    "fibre_g": 1.7,
    "folate_ug": 44.0,
    "iron_mg": 0.76,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 159.0,
    "protein_g": 5.06,
    "salt_g": 0.78,
    "sat_fat_g": 2.11,
    "sodium_mg": 312.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168960",
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
