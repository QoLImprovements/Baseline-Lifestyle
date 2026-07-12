/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "artichoke-medium",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169205",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "artichoke-medium",
      "kind": "unit",
      "label": "artichoke, medium"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "artichoke-large",
      "kind": "unit",
      "label": "artichoke, large"
    }
  ],
  "name": "Artichokes, (globe or french), raw",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 10.5,
    "energy_kcal": 47.0,
    "fat_g": 0.15,
    "fibre_g": 5.4,
    "folate_ug": 68.0,
    "iron_mg": 1.28,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 370.0,
    "protein_g": 3.27,
    "salt_g": 0.235,
    "sat_fat_g": 0.036,
    "sodium_mg": 94.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 11.7,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 14.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169205",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
