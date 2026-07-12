/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "piece-whole",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169242",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "piece-whole",
      "kind": "unit",
      "label": "piece whole"
    }
  ],
  "name": "Mushrooms, shiitake, raw",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 6.79,
    "energy_kcal": 34.0,
    "fat_g": 0.49,
    "fibre_g": 2.5,
    "folate_ug": 13.0,
    "iron_mg": 0.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 304.0,
    "protein_g": 2.24,
    "salt_g": 0.0225,
    "sat_fat_g": 0.0,
    "sodium_mg": 9.0,
    "sugar_g": 2.38,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169242",
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
