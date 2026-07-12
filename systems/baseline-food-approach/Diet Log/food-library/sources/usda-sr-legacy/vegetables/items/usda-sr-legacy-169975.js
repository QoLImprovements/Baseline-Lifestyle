/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "leaf-large",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "leaf-large",
      "kind": "unit",
      "label": "leaf, large"
    },
    {
      "gramsPerUnit": 908.0,
      "key": "head-medium-about-5-3-4-dia",
      "kind": "unit",
      "label": "head, medium (about 5-3/4\" dia)"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "leaf-medium",
      "kind": "unit",
      "label": "leaf, medium"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    },
    {
      "gramsPerUnit": 1248.0,
      "key": "head-large-about-7-dia",
      "kind": "unit",
      "label": "head, large (about 7\" dia)"
    },
    {
      "gramsPerUnit": 714.0,
      "key": "head-small-about-4-1-2-dia",
      "kind": "unit",
      "label": "head, small (about 4-1/2\" dia)"
    }
  ],
  "name": "Cabbage, raw",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 5.8,
    "energy_kcal": 25.0,
    "fat_g": 0.1,
    "fibre_g": 2.5,
    "folate_ug": 43.0,
    "iron_mg": 0.47,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 170.0,
    "protein_g": 1.28,
    "salt_g": 0.045,
    "sat_fat_g": 0.034,
    "sodium_mg": 18.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 36.6,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 76.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169975",
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
