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
  "id": "usda-sr-legacy-170375",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "0-5-cup-1-pieces",
      "kind": "unit",
      "label": "0.5 cup (1\" pieces)"
    }
  ],
  "name": "Beet greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 4.33,
    "energy_kcal": 92.0,
    "fat_g": 0.13,
    "fibre_g": 3.7,
    "folate_ug": 15.0,
    "iron_mg": 2.57,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 762.0,
    "protein_g": 2.2,
    "salt_g": 0.565,
    "sat_fat_g": 0.02,
    "sodium_mg": 226.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 316.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 400.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170375",
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
