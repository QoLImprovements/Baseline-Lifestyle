/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "leaf",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169990",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    }
  ],
  "name": "Celtuce, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 3.65,
    "energy_kcal": 75.0,
    "fat_g": 0.3,
    "fibre_g": 1.7,
    "folate_ug": 46.0,
    "iron_mg": 0.55,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 330.0,
    "protein_g": 0.85,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 175.0,
    "vitamin_c_mg": 19.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169990",
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
