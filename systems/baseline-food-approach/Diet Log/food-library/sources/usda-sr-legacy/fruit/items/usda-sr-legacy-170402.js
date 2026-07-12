/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-1-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170402",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup (1\" pieces)"
    },
    {
      "gramsPerUnit": 203.0,
      "key": "chayote-5-3-4",
      "kind": "unit",
      "label": "chayote (5-3/4\")"
    }
  ],
  "name": "Chayote, fruit, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 4.51,
    "energy_kcal": 80.0,
    "fat_g": 0.13,
    "fibre_g": 1.7,
    "folate_ug": 93.0,
    "iron_mg": 0.34,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 125.0,
    "protein_g": 0.82,
    "salt_g": 0.005,
    "sat_fat_g": 0.028,
    "sodium_mg": 2.0,
    "sugar_g": 1.66,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170402",
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
