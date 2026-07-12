/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-5-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167721",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "2-5-oz",
      "kind": "unit",
      "label": "2.5 oz"
    }
  ],
  "name": "Frozen novelties, juice type, juice with cream",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 24.1,
    "energy_kcal": 115.0,
    "fat_g": 1.41,
    "fibre_g": 0.1,
    "folate_ug": 11.0,
    "iron_mg": 0.28,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 120.0,
    "protein_g": 1.41,
    "salt_g": 0.105,
    "sat_fat_g": 0.705,
    "sodium_mg": 42.0,
    "sugar_g": 20.6,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 21.2,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167721",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "sweets"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
