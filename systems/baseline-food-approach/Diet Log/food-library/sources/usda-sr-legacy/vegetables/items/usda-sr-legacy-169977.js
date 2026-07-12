/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-shredded",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169977",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    },
    {
      "gramsPerUnit": 839.0,
      "key": "head-medium-about-5-dia",
      "kind": "unit",
      "label": "head, medium (about 5\" dia)"
    },
    {
      "gramsPerUnit": 1134.0,
      "key": "head-large-about-5-1-2-dia",
      "kind": "unit",
      "label": "head, large (about 5-1/2\" dia)"
    },
    {
      "gramsPerUnit": 567.0,
      "key": "head-small-4-dia",
      "kind": "unit",
      "label": "head, small (4\" dia)"
    }
  ],
  "name": "Cabbage, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 7.37,
    "energy_kcal": 31.0,
    "fat_g": 0.16,
    "fibre_g": 2.1,
    "folate_ug": 18.0,
    "iron_mg": 0.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 243.0,
    "protein_g": 1.43,
    "salt_g": 0.0675,
    "sat_fat_g": 0.021,
    "sodium_mg": 27.0,
    "sugar_g": 3.83,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 57.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 38.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169977",
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
