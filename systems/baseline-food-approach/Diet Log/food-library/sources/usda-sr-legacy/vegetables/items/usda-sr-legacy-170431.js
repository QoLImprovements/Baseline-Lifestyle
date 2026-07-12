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
  "id": "usda-sr-legacy-170431",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Poi",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 27.2,
    "energy_kcal": 469.0,
    "fat_g": 0.14,
    "fibre_g": 0.4,
    "folate_ug": 21.0,
    "iron_mg": 0.88,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 183.0,
    "protein_g": 0.38,
    "salt_g": 0.03,
    "sat_fat_g": 0.029,
    "sodium_mg": 12.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 2.3,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170431",
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
