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
  "id": "usda-sr-legacy-169890",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cabbage, japanese style, fresh, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 5.67,
    "energy_kcal": 125.0,
    "fat_g": 0.1,
    "fibre_g": 3.1,
    "folate_ug": 42.0,
    "iron_mg": 0.49,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 853.0,
    "protein_g": 1.6,
    "salt_g": 0.6925,
    "sat_fat_g": 0.013,
    "sodium_mg": 277.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 126.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169890",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
