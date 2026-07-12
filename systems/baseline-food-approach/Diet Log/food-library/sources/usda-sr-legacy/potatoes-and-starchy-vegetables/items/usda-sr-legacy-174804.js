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
  "id": "usda-sr-legacy-174804",
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
    },
    {
      "gramsPerUnit": 28.0,
      "key": "16-5-pieces-average",
      "kind": "unit",
      "label": "16.5 pieces average"
    }
  ],
  "name": "Snacks, potato chips, made from dried potatoes (preformed), multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 65.3,
    "energy_kcal": 2110.0,
    "fat_g": 24.7,
    "fibre_g": 2.7,
    "folate_ug": 16.0,
    "iron_mg": 0.85,
    "magnesium_mg": 40.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 127.0,
    "potassium_mg": 330.0,
    "protein_g": 5.3,
    "salt_g": 1.36,
    "sat_fat_g": 6.31,
    "sodium_mg": 544.0,
    "sugar_g": 4.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 9.08,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174804",
  "state": "Dried",
  "subcategory": "Snacks",
  "tags": [
    "dried",
    "potatoes-and-starchy-vegetables",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
