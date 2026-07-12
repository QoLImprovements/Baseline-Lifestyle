/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-1-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170481",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup (1\" pieces)"
    }
  ],
  "name": "Borage, raw",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 3.06,
    "energy_kcal": 88.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 3.3,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 470.0,
    "protein_g": 1.8,
    "salt_g": 0.2,
    "sat_fat_g": 0.17,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 210.0,
    "vitamin_c_mg": 35.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170481",
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
