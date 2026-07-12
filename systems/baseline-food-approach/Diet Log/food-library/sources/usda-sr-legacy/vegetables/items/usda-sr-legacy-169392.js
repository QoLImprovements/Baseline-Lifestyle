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
  "id": "usda-sr-legacy-169392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Broccoli, chinese, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 3.81,
    "energy_kcal": 94.0,
    "fat_g": 0.72,
    "fibre_g": 2.5,
    "folate_ug": 99.0,
    "iron_mg": 0.56,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 261.0,
    "protein_g": 1.14,
    "salt_g": 0.0175,
    "sat_fat_g": 0.11,
    "sodium_mg": 7.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 28.2,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 84.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169392",
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
