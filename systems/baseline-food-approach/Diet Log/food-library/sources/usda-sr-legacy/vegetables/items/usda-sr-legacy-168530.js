/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-1-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168530",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "0-5-cup-1-slices",
      "kind": "unit",
      "label": "0.5 cup (1\" slices)"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup (1\" pieces)"
    }
  ],
  "name": "Gourd, dishcloth (towelgourd), cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 13.8,
    "energy_kcal": 224.0,
    "fat_g": 0.34,
    "fibre_g": 2.9,
    "folate_ug": 12.0,
    "iron_mg": 0.36,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 453.0,
    "protein_g": 0.66,
    "salt_g": 0.6425,
    "sat_fat_g": 0.027,
    "sodium_mg": 257.0,
    "sugar_g": 5.17,
    "vitamin_a_ug": 260.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168530",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
