/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-cup",
  "description": "Not included in a food category",
  "id": "usda-fndds-2709780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "1-leaf",
      "kind": "unit",
      "label": "1 leaf"
    }
  ],
  "name": "Basil, raw",
  "nutritionPerBasis": {
    "calcium_mg": 177.0,
    "carbs_g": 2.65,
    "energy_kcal": 23.0,
    "fat_g": 0.64,
    "fibre_g": 1.6,
    "folate_ug": 68.0,
    "iron_mg": 3.17,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 295.0,
    "protein_g": 3.15,
    "salt_g": 0.01,
    "sat_fat_g": 0.041,
    "sodium_mg": 4.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 264.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 415.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709780",
  "state": "Raw",
  "subcategory": "Not included in a food category",
  "tags": [
    "herbs-spices-and-seasonings",
    "not-included-in-a-food-category",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
