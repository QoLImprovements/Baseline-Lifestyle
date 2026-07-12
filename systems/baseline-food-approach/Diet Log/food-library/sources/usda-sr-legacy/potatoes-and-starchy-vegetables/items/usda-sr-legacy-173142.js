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
  "id": "usda-sr-legacy-173142",
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
  "name": "Snacks, plantain chips, salted",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 63.8,
    "energy_kcal": 531.0,
    "fat_g": 29.6,
    "fibre_g": 3.5,
    "folate_ug": 35.0,
    "iron_mg": 0.97,
    "magnesium_mg": 71.0,
    "omega3_g": 0.106,
    "phosphorus_mg": 78.0,
    "potassium_mg": 786.0,
    "protein_g": 2.28,
    "salt_g": 0.505,
    "sat_fat_g": 8.34,
    "sodium_mg": 202.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 32.1,
    "vitamin_e_mg": 5.04,
    "vitamin_k_ug": 28.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173142",
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
