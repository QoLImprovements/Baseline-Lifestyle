/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar-1-45-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168754",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "bar-1-45-oz",
      "kind": "unit",
      "label": "bar (1.45 oz)"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "bar-1-55-oz",
      "kind": "unit",
      "label": "bar (1.55 oz)"
    }
  ],
  "name": "Candies, milk chocolate, with almonds",
  "nutritionPerBasis": {
    "calcium_mg": 224.0,
    "carbs_g": 53.4,
    "energy_kcal": 2200.0,
    "fat_g": 34.4,
    "fibre_g": 6.2,
    "folate_ug": 14.0,
    "iron_mg": 1.63,
    "magnesium_mg": 90.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 264.0,
    "potassium_mg": 444.0,
    "protein_g": 9.0,
    "salt_g": 0.185,
    "sat_fat_g": 17.7,
    "sodium_mg": 74.0,
    "sugar_g": 43.9,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 3.14,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168754",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
