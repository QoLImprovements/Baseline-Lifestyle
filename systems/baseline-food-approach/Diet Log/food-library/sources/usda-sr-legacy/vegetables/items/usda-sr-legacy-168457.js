/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "2-tbsp-1-8-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168457",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "2-tbsp-1-8-cup",
      "kind": "unit",
      "label": "2 tbsp (1/8 cup)"
    }
  ],
  "name": "Seaweed, kelp, raw",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 9.57,
    "energy_kcal": 180.0,
    "fat_g": 0.56,
    "fibre_g": 1.3,
    "folate_ug": 180.0,
    "iron_mg": 2.85,
    "magnesium_mg": 121.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 42.0,
    "potassium_mg": 89.0,
    "protein_g": 1.68,
    "salt_g": 0.5825,
    "sat_fat_g": 0.247,
    "sodium_mg": 233.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 66.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168457",
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
