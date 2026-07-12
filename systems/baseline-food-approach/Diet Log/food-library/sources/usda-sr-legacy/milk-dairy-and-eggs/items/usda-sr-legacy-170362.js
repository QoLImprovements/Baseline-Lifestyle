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
  "id": "usda-sr-legacy-170362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 729.0,
      "key": "pie-12-diameter",
      "kind": "unit",
      "label": "pie 12\" diameter"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "slice-1-4-of-pie",
      "kind": "unit",
      "label": "slice 1/4 of pie"
    }
  ],
  "name": "DIGIORNO Pizza, cheese topping, rising crust, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 31.8,
    "energy_kcal": 256.0,
    "fat_g": 8.6,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 0.77,
    "magnesium_mg": 27.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 241.0,
    "potassium_mg": 196.0,
    "protein_g": 12.8,
    "salt_g": 1.74,
    "sat_fat_g": 3.51,
    "sodium_mg": 696.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170362",
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
