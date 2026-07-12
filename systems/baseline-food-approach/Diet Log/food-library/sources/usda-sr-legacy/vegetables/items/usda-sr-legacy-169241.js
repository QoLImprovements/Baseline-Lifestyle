/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "strip",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169241",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.3,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Kanpyo, (dried gourd strips)",
  "nutritionPerBasis": {
    "calcium_mg": 280.0,
    "carbs_g": 65.0,
    "energy_kcal": 1080.0,
    "fat_g": 0.56,
    "fibre_g": 9.8,
    "folate_ug": 61.0,
    "iron_mg": 5.12,
    "magnesium_mg": 125.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 1580.0,
    "protein_g": 8.58,
    "salt_g": 0.0375,
    "sat_fat_g": 0.045,
    "sodium_mg": 15.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169241",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
