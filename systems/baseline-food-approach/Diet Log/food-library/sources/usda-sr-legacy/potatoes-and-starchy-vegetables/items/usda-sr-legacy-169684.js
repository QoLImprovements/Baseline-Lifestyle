/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-169684",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, potato chips, fat-free, made with olestra",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 65.0,
    "energy_kcal": 274.0,
    "fat_g": 0.7,
    "fibre_g": 6.8,
    "folate_ug": 83.0,
    "iron_mg": 2.4,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 174.0,
    "potassium_mg": 1160.0,
    "protein_g": 7.74,
    "salt_g": 1.385,
    "sat_fat_g": 0.24,
    "sodium_mg": 554.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 28.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169684",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
