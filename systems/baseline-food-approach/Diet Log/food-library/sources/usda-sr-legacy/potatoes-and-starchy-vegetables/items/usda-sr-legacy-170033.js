/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "potato-2-1-3-x-4-3-4",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "potato-2-1-3-x-4-3-4",
      "kind": "unit",
      "label": "potato (2-1/3\" x 4-3/4\")"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Potatoes, baked, flesh, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 21.6,
    "energy_kcal": 93.0,
    "fat_g": 0.1,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.35,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 391.0,
    "protein_g": 1.96,
    "salt_g": 0.0125,
    "sat_fat_g": 0.026,
    "sodium_mg": 5.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.8,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170033",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
