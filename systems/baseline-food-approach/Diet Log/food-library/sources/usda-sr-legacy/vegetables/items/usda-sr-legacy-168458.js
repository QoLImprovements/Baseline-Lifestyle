/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "10-sheets",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168458",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "10-sheets",
      "kind": "unit",
      "label": "10 sheets"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "2-tbsp-1-8-cup",
      "kind": "unit",
      "label": "2 tbsp (1/8 cup)"
    }
  ],
  "name": "Seaweed, laver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 5.11,
    "energy_kcal": 35.0,
    "fat_g": 0.28,
    "fibre_g": 0.3,
    "folate_ug": 146.0,
    "iron_mg": 1.8,
    "magnesium_mg": 2.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 58.0,
    "potassium_mg": 356.0,
    "protein_g": 5.81,
    "salt_g": 0.12,
    "sat_fat_g": 0.061,
    "sodium_mg": 48.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 260.0,
    "vitamin_c_mg": 39.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168458",
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
