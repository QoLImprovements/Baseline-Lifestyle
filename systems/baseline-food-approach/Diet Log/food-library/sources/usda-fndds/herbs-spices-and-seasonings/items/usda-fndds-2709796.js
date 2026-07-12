/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-sprig",
  "description": "Not included in a food category",
  "id": "usda-fndds-2709796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-sprig",
      "kind": "unit",
      "label": "1 sprig"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Parsley, raw",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 6.33,
    "energy_kcal": 36.0,
    "fat_g": 0.79,
    "fibre_g": 3.3,
    "folate_ug": 152.0,
    "iron_mg": 6.2,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 554.0,
    "protein_g": 2.97,
    "salt_g": 0.14,
    "sat_fat_g": 0.132,
    "sodium_mg": 56.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 421.0,
    "vitamin_c_mg": 133.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 1640.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709796",
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
