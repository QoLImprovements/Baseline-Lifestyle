/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "piece-4-x-6",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "piece-4-x-6",
      "kind": "unit",
      "label": "piece 4\" x 6\""
    }
  ],
  "name": "School Lunch, pizza, TONY'S SMARTPIZZA Whole Grain 4x6 Cheese Pizza 50/50 Cheese, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 207.0,
    "carbs_g": 29.3,
    "energy_kcal": 975.0,
    "fat_g": 7.51,
    "fibre_g": 3.8,
    "folate_ug": 0.0,
    "iron_mg": 2.4,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 331.0,
    "protein_g": 12.1,
    "salt_g": 1.0,
    "sat_fat_g": 2.79,
    "sodium_mg": 400.0,
    "sugar_g": 6.76,
    "vitamin_a_ug": 324.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170702",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
