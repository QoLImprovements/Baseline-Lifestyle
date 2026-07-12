/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "gourd",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "gourd",
      "kind": "unit",
      "label": "gourd"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup (1\" pieces)"
    }
  ],
  "name": "Gourd, dishcloth (towelgourd), raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 4.35,
    "energy_kcal": 20.0,
    "fat_g": 0.2,
    "fibre_g": 1.1,
    "folate_ug": 7.0,
    "iron_mg": 0.36,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 139.0,
    "protein_g": 1.2,
    "salt_g": 0.0075,
    "sat_fat_g": 0.016,
    "sodium_mg": 3.0,
    "sugar_g": 2.02,
    "vitamin_a_ug": 410.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168414",
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
