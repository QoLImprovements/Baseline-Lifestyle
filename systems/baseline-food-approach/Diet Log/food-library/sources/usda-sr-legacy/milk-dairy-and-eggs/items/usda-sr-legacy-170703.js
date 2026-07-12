/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "piece-4-x6",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170703",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "piece-4-x6",
      "kind": "unit",
      "label": "piece 4\"x6\""
    }
  ],
  "name": "School Lunch, pizza, TONY'S SMARTPIZZA Whole Grain 4x6 Pepperoni Pizza 50/50 Cheese, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 28.8,
    "energy_kcal": 238.0,
    "fat_g": 8.19,
    "fibre_g": 4.1,
    "folate_ug": 0.0,
    "iron_mg": 2.6,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 363.0,
    "protein_g": 12.1,
    "salt_g": 1.175,
    "sat_fat_g": 2.81,
    "sodium_mg": 470.0,
    "sugar_g": 7.24,
    "vitamin_a_ug": 379.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170703",
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
