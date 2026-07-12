/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pie-12-diameter",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170361",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 688.0,
      "key": "pie-12-diameter",
      "kind": "unit",
      "label": "pie 12\" diameter"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "slice-1-4-of-pie",
      "kind": "unit",
      "label": "slice 1/4 of pie"
    }
  ],
  "name": "DIGIORNO Pizza, cheese topping, cheese stuffed crust, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 235.0,
    "carbs_g": 29.9,
    "energy_kcal": 1160.0,
    "fat_g": 11.7,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 2.35,
    "magnesium_mg": 27.0,
    "omega3_g": 0.177,
    "phosphorus_mg": 354.0,
    "potassium_mg": 185.0,
    "protein_g": 13.5,
    "salt_g": 2.015,
    "sat_fat_g": 5.63,
    "sodium_mg": 806.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170361",
  "state": "Baked",
  "subcategory": "Fast Foods",
  "tags": [
    "baked",
    "fast-foods",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
