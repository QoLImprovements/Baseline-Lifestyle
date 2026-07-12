/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172050",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 919.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    }
  ],
  "name": "LITTLE CAESARS 14\" Cheese Pizza, Large Deep Dish Crust",
  "nutritionPerBasis": {
    "calcium_mg": 224.0,
    "carbs_g": 30.1,
    "energy_kcal": 263.0,
    "fat_g": 10.2,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 2.31,
    "magnesium_mg": 27.0,
    "omega3_g": 0.183,
    "phosphorus_mg": 221.0,
    "potassium_mg": 160.0,
    "protein_g": 12.6,
    "salt_g": 1.08,
    "sat_fat_g": 4.24,
    "sodium_mg": 432.0,
    "sugar_g": 3.66,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172050",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
