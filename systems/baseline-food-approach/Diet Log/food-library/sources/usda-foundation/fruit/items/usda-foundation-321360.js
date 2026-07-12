/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "5-tomatoes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-321360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 49.7,
      "key": "5-tomatoes",
      "kind": "unit",
      "label": "5 tomatoes"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Tomatoes, grape, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 5.51,
    "energy_kcal": 27.0,
    "fat_g": 0.63,
    "fibre_g": 2.1,
    "folate_ug": 10.0,
    "iron_mg": 0.33,
    "magnesium_mg": 11.9,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 260.0,
    "protein_g": 0.83,
    "salt_g": 0.015,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.2,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "321360",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fruit",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
