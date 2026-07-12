/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "leaf",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    }
  ],
  "name": "Grape leaves, canned",
  "nutritionPerBasis": {
    "calcium_mg": 289.0,
    "carbs_g": 11.7,
    "energy_kcal": 69.0,
    "fat_g": 1.97,
    "fibre_g": 9.9,
    "folate_ug": 78.0,
    "iron_mg": 2.98,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 29.0,
    "protein_g": 4.27,
    "salt_g": 7.125,
    "sat_fat_g": 0.312,
    "sodium_mg": 2850.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 263.0,
    "vitamin_c_mg": 11.3,
    "vitamin_e_mg": 1.79,
    "vitamin_k_ug": 97.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169393",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "fruit",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
