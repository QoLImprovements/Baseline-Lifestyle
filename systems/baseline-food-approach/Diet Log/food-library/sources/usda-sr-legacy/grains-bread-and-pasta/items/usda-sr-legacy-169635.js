/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "roll",
  "description": "Snacks",
  "id": "usda-sr-legacy-169635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    }
  ],
  "name": "Snacks, SUNKIST, SUNKIST Fruit Roll, strawberry, with vitamins A, C, and E",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 82.7,
    "energy_kcal": 1430.0,
    "fat_g": 1.0,
    "fibre_g": 7.7,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.6,
    "salt_g": 0.2775,
    "sat_fat_g": 0.0,
    "sodium_mg": 111.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 835.0,
    "vitamin_c_mg": 81.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169635",
  "state": "Raw",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "raw",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
