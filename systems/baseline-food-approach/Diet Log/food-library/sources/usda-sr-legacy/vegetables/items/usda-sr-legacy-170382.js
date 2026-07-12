/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "bunch-cooked",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170382",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 437.0,
      "key": "bunch-cooked",
      "kind": "unit",
      "label": "bunch cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    }
  ],
  "name": "Broccoli raab, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 3.12,
    "energy_kcal": 25.0,
    "fat_g": 0.52,
    "fibre_g": 2.8,
    "folate_ug": 71.0,
    "iron_mg": 1.27,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 343.0,
    "protein_g": 3.83,
    "salt_g": 0.14,
    "sat_fat_g": 0.089,
    "sodium_mg": 56.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 227.0,
    "vitamin_c_mg": 37.0,
    "vitamin_e_mg": 2.53,
    "vitamin_k_ug": 256.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170382",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
