/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170002",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Onions, dehydrated flakes",
  "nutritionPerBasis": {
    "calcium_mg": 257.0,
    "carbs_g": 83.3,
    "energy_kcal": 349.0,
    "fat_g": 0.46,
    "fibre_g": 9.2,
    "folate_ug": 166.0,
    "iron_mg": 1.55,
    "magnesium_mg": 92.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 303.0,
    "potassium_mg": 1620.0,
    "protein_g": 8.95,
    "salt_g": 0.0525,
    "sat_fat_g": 0.078,
    "sodium_mg": 21.0,
    "sugar_g": 37.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 75.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170002",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
