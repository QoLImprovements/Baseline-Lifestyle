/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "pepper",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169396",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    }
  ],
  "name": "Peppers, ancho, dried",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 51.4,
    "energy_kcal": 281.0,
    "fat_g": 8.2,
    "fibre_g": 21.6,
    "folate_ug": 69.0,
    "iron_mg": 10.9,
    "magnesium_mg": 113.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 201.0,
    "potassium_mg": 2410.0,
    "protein_g": 11.9,
    "salt_g": 0.1075,
    "sat_fat_g": 0.82,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1020.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169396",
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
