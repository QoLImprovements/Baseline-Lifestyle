/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "tomato",
      "kind": "unit",
      "label": "tomato"
    }
  ],
  "name": "Tomatoes, orange, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 3.18,
    "energy_kcal": 67.0,
    "fat_g": 0.19,
    "fibre_g": 0.9,
    "folate_ug": 29.0,
    "iron_mg": 0.47,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 212.0,
    "protein_g": 1.16,
    "salt_g": 0.105,
    "sat_fat_g": 0.025,
    "sodium_mg": 42.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170502",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fruit",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
