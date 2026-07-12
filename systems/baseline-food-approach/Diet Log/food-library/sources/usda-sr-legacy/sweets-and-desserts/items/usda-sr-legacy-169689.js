/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-169689",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, M&M MARS, KUDOS Whole Grain Bar, chocolate chip",
  "nutritionPerBasis": {
    "calcium_mg": 1080.0,
    "carbs_g": 72.3,
    "energy_kcal": 420.0,
    "fat_g": 13.0,
    "fibre_g": 2.6,
    "folate_ug": 13.0,
    "iron_mg": 1.4,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 207.0,
    "potassium_mg": 279.0,
    "protein_g": 4.47,
    "salt_g": 0.615,
    "sat_fat_g": 4.7,
    "sodium_mg": 246.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 10.8,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169689",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
