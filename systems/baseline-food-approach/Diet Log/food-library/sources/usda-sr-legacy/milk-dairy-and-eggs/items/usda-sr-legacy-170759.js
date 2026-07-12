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
  "id": "usda-sr-legacy-170759",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 732.0,
      "key": "pie-12-diameter",
      "kind": "unit",
      "label": "pie 12\" diameter"
    },
    {
      "gramsPerUnit": 179.0,
      "key": "slice-1-4-of-pie",
      "kind": "unit",
      "label": "slice 1/4 of pie"
    }
  ],
  "name": "DIGIORNO Pizza, pepperoni topping, cheese stuffed crust, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 226.0,
    "carbs_g": 29.5,
    "energy_kcal": 279.0,
    "fat_g": 11.7,
    "fibre_g": 2.1,
    "folate_ug": 0.0,
    "iron_mg": 2.3,
    "magnesium_mg": 26.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 270.0,
    "potassium_mg": 179.0,
    "protein_g": 13.9,
    "salt_g": 1.8825,
    "sat_fat_g": 5.01,
    "sodium_mg": 753.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170759",
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
