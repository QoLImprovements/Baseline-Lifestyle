/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "large-2-1-4-per-pound-approx-3-3-4-long-3-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "large-2-1-4-per-pound-approx-3-3-4-long-3-dia",
      "kind": "unit",
      "label": "large (2-1/4 per pound, approx 3-3/4\" long, 3\" dia.)"
    },
    {
      "gramsPerUnit": 9.3,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "ring-3-dia-1-4-thick",
      "kind": "unit",
      "label": "ring (3\" dia., 1/4\" thick)"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "medium-approx-2-3-4-long-2-1-2-dia",
      "kind": "unit",
      "label": "medium (approx 2-3/4\" long, 2-1/2 dia.)"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    }
  ],
  "name": "Peppers, sweet, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 6.03,
    "energy_kcal": 26.0,
    "fat_g": 0.3,
    "fibre_g": 2.1,
    "folate_ug": 46.0,
    "iron_mg": 0.43,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 211.0,
    "protein_g": 0.99,
    "salt_g": 0.01,
    "sat_fat_g": 0.059,
    "sodium_mg": 4.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 157.0,
    "vitamin_c_mg": 128.0,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170108",
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
