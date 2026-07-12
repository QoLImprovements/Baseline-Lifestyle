/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-per-1-10-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "slice-per-1-10-pizza",
      "kind": "unit",
      "label": "slice per 1/10 pizza"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "slice-per-1-8-pizza",
      "kind": "unit",
      "label": "slice per 1/8 pizza"
    }
  ],
  "name": "School Lunch, pizza, cheese topping, thick crust, whole grain, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 193.0,
    "carbs_g": 28.1,
    "energy_kcal": 1060.0,
    "fat_g": 9.27,
    "fibre_g": 2.9,
    "folate_ug": 88.0,
    "iron_mg": 2.63,
    "magnesium_mg": 40.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 284.0,
    "potassium_mg": 303.0,
    "protein_g": 14.6,
    "salt_g": 1.0525,
    "sat_fat_g": 4.36,
    "sodium_mg": 421.0,
    "sugar_g": 5.02,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170779",
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
