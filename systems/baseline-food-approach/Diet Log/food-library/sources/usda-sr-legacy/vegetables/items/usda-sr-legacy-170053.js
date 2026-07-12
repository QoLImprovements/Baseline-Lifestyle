/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170053",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tomatoes, red, ripe, canned, with green chilies",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 3.62,
    "energy_kcal": 63.0,
    "fat_g": 0.08,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.26,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 107.0,
    "protein_g": 0.69,
    "salt_g": 1.0025,
    "sat_fat_g": 0.011,
    "sodium_mg": 401.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170053",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
