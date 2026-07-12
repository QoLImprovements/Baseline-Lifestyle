/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tomato",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "tomato",
      "kind": "unit",
      "label": "tomato"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Tomatoes, yellow, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 2.98,
    "energy_kcal": 63.0,
    "fat_g": 0.26,
    "fibre_g": 0.7,
    "folate_ug": 30.0,
    "iron_mg": 0.49,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 258.0,
    "protein_g": 0.98,
    "salt_g": 0.0575,
    "sat_fat_g": 0.036,
    "sodium_mg": 23.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170096",
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
