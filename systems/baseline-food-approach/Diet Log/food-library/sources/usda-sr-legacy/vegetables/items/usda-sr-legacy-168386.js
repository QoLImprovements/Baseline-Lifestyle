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
  "id": "usda-sr-legacy-168386",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "artichoke-medium",
      "kind": "unit",
      "label": "artichoke, medium"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "0-5-cup-hearts",
      "kind": "unit",
      "label": "0.5 cup hearts"
    }
  ],
  "name": "Artichokes, (globe or french), cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 12.0,
    "energy_kcal": 220.0,
    "fat_g": 0.34,
    "fibre_g": 5.7,
    "folate_ug": 89.0,
    "iron_mg": 0.61,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 286.0,
    "protein_g": 2.89,
    "salt_g": 0.15,
    "sat_fat_g": 0.079,
    "sodium_mg": 60.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 14.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168386",
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
