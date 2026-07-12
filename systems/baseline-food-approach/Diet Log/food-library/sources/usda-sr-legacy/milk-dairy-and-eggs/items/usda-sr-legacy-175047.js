/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pancake-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "pancake-4-dia",
      "kind": "unit",
      "label": "pancake (4\" dia)"
    },
    {
      "gramsPerUnit": 77.0,
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
  "name": "Pancakes, buttermilk, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 157.0,
    "carbs_g": 28.7,
    "energy_kcal": 950.0,
    "fat_g": 9.3,
    "fibre_g": 0.0,
    "folate_ug": 38.0,
    "iron_mg": 1.7,
    "magnesium_mg": 15.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 139.0,
    "potassium_mg": 145.0,
    "protein_g": 6.8,
    "salt_g": 1.305,
    "sat_fat_g": 1.83,
    "sodium_mg": 522.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175047",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
