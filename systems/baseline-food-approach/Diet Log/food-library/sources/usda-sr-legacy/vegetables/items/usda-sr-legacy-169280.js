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
  "id": "usda-sr-legacy-169280",
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
  "name": "Seaweed, agar, raw",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 6.75,
    "energy_kcal": 109.0,
    "fat_g": 0.03,
    "fibre_g": 0.5,
    "folate_ug": 85.0,
    "iron_mg": 1.86,
    "magnesium_mg": 67.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 5.0,
    "potassium_mg": 226.0,
    "protein_g": 0.54,
    "salt_g": 0.0225,
    "sat_fat_g": 0.006,
    "sodium_mg": 9.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169280",
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
