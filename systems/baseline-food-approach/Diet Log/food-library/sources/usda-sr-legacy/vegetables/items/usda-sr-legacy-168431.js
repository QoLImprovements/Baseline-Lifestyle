/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "leaf-outer",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168431",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "leaf-outer",
      "kind": "unit",
      "label": "leaf outer"
    },
    {
      "gramsPerUnit": 2.6,
      "key": "leaf-inner",
      "kind": "unit",
      "label": "leaf inner"
    },
    {
      "gramsPerUnit": 309.0,
      "key": "head",
      "kind": "unit",
      "label": "head"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup shredded"
    }
  ],
  "name": "Lettuce, red leaf, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 2.26,
    "energy_kcal": 55.0,
    "fat_g": 0.22,
    "fibre_g": 0.9,
    "folate_ug": 36.0,
    "iron_mg": 1.2,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 187.0,
    "protein_g": 1.33,
    "salt_g": 0.0625,
    "sat_fat_g": 0.028,
    "sodium_mg": 25.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 375.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 140.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168431",
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
