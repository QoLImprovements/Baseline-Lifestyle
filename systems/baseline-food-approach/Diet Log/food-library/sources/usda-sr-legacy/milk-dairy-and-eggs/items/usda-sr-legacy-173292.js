/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173292",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 853.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Fast Food, Pizza Chain, 14\" pizza, cheese topping, regular crust",
  "nutritionPerBasis": {
    "calcium_mg": 188.0,
    "carbs_g": 33.3,
    "energy_kcal": 266.0,
    "fat_g": 9.69,
    "fibre_g": 2.3,
    "folate_ug": 93.0,
    "iron_mg": 2.48,
    "magnesium_mg": 24.0,
    "omega3_g": 0.183,
    "phosphorus_mg": 216.0,
    "potassium_mg": 172.0,
    "protein_g": 11.4,
    "salt_g": 1.495,
    "sat_fat_g": 4.46,
    "sodium_mg": 598.0,
    "sugar_g": 3.58,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173292",
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
