/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-167971",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.6,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "serving-6-pieces",
      "kind": "unit",
      "label": "serving 6 pieces"
    }
  ],
  "name": "Candies, TOOTSIE ROLL, chocolate-flavor roll",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 87.7,
    "energy_kcal": 1620.0,
    "fat_g": 3.31,
    "fibre_g": 0.1,
    "folate_ug": 9.0,
    "iron_mg": 0.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 57.0,
    "potassium_mg": 116.0,
    "protein_g": 1.59,
    "salt_g": 0.11,
    "sat_fat_g": 0.967,
    "sodium_mg": 44.0,
    "sugar_g": 56.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167971",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
