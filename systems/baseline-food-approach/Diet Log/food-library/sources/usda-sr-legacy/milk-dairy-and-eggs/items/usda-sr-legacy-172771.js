/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "mini-pancake",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172771",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.1,
      "key": "mini-pancake",
      "kind": "unit",
      "label": "mini pancake"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "pancake",
      "kind": "unit",
      "label": "pancake"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "pancake-6-dia",
      "kind": "unit",
      "label": "pancake (6\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pancakes plain, frozen, ready-to-heat (includes buttermilk)",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 37.8,
    "energy_kcal": 977.0,
    "fat_g": 6.83,
    "fibre_g": 1.0,
    "folate_ug": 71.0,
    "iron_mg": 5.67,
    "magnesium_mg": 14.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 215.0,
    "potassium_mg": 90.0,
    "protein_g": 5.23,
    "salt_g": 1.1525,
    "sat_fat_g": 1.16,
    "sodium_mg": 461.0,
    "sugar_g": 8.32,
    "vitamin_a_ug": 453.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172771",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
