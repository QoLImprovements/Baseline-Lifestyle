/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170499",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "tbsp-chopped",
      "kind": "unit",
      "label": "tbsp chopped"
    }
  ],
  "name": "Shallots, raw",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 16.8,
    "energy_kcal": 72.0,
    "fat_g": 0.1,
    "fibre_g": 3.2,
    "folate_ug": 34.0,
    "iron_mg": 1.2,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 334.0,
    "protein_g": 2.5,
    "salt_g": 0.03,
    "sat_fat_g": 0.017,
    "sodium_mg": 12.0,
    "sugar_g": 7.87,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170499",
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
