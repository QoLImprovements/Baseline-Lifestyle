/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "5-3-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-330415",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "5-3-oz",
      "kind": "unit",
      "label": "5.3 oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Yogurt, Greek, strawberry, nonfat",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 12.2,
    "energy_kcal": 83.0,
    "fat_g": 0.15,
    "fibre_g": 0.6,
    "folate_ug": 20.0,
    "iron_mg": 0.09,
    "magnesium_mg": 10.4,
    "omega3_g": 0.006,
    "phosphorus_mg": 113.0,
    "potassium_mg": 133.0,
    "protein_g": 8.06,
    "salt_g": 0.08,
    "sat_fat_g": 0.103,
    "sodium_mg": 32.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "330415",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
