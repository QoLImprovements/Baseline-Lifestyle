/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-1-8-per-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "slice-1-8-per-pizza",
      "kind": "unit",
      "label": "slice 1/8 per pizza"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "slice-1-10-per-pizza",
      "kind": "unit",
      "label": "slice 1/10 per pizza"
    }
  ],
  "name": "School Lunch, pizza, BIG DADDY'S LS 16\" 51% Whole Grain Rolled Edge Cheese Pizza, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 183.0,
    "carbs_g": 27.1,
    "energy_kcal": 1020.0,
    "fat_g": 8.81,
    "fibre_g": 2.7,
    "folate_ug": 0.0,
    "iron_mg": 2.5,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 288.0,
    "protein_g": 13.9,
    "salt_g": 1.0,
    "sat_fat_g": 4.14,
    "sodium_mg": 400.0,
    "sugar_g": 4.77,
    "vitamin_a_ug": 217.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170305",
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
