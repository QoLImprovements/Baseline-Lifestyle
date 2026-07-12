/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tablespoon",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-323793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "sifted",
      "kind": "unit",
      "label": "sifted"
    }
  ],
  "name": "Egg, white, dried",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 6.02,
    "energy_kcal": 1570.0,
    "fat_g": 0.65,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 87.6,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 959.0,
    "protein_g": 79.9,
    "salt_g": 3.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 1250.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "323793",
  "state": "Dried",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
