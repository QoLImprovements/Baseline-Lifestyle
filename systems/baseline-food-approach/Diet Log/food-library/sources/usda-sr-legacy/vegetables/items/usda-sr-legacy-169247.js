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
  "id": "usda-sr-legacy-169247",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup shredded"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "leaf-inner",
      "kind": "unit",
      "label": "leaf inner"
    },
    {
      "gramsPerUnit": 626.0,
      "key": "head",
      "kind": "unit",
      "label": "head"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "leaf-outer",
      "kind": "unit",
      "label": "leaf outer"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    }
  ],
  "name": "Lettuce, cos or romaine, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 3.29,
    "energy_kcal": 17.0,
    "fat_g": 0.3,
    "fibre_g": 2.1,
    "folate_ug": 136.0,
    "iron_mg": 0.97,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 247.0,
    "protein_g": 1.23,
    "salt_g": 0.02,
    "sat_fat_g": 0.039,
    "sodium_mg": 8.0,
    "sugar_g": 1.19,
    "vitamin_a_ug": 436.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 102.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169247",
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
