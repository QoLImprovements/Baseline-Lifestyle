/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "slice",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 659.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 365.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    },
    {
      "gramsPerUnit": 1200.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Yambean (jicama), raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.82,
    "energy_kcal": 38.0,
    "fat_g": 0.09,
    "fibre_g": 4.9,
    "folate_ug": 12.0,
    "iron_mg": 0.6,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 150.0,
    "protein_g": 0.72,
    "salt_g": 0.01,
    "sat_fat_g": 0.021,
    "sodium_mg": 4.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 20.2,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170073",
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
