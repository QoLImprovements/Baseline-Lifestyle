/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-1-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "0-5-cup-1-pieces",
      "kind": "unit",
      "label": "0.5 cup (1\" pieces)"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "3-flowerets",
      "kind": "unit",
      "label": "3 flowerets"
    }
  ],
  "name": "Cauliflower, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 4.11,
    "energy_kcal": 23.0,
    "fat_g": 0.45,
    "fibre_g": 2.3,
    "folate_ug": 44.0,
    "iron_mg": 0.32,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 142.0,
    "protein_g": 1.84,
    "salt_g": 0.0375,
    "sat_fat_g": 0.07,
    "sodium_mg": 15.0,
    "sugar_g": 2.08,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 44.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 13.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170397",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
