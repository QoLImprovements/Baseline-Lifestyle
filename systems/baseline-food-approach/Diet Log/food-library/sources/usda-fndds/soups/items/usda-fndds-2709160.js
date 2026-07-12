/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "1-cup",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2709160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, wonton",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 2.95,
    "energy_kcal": 33.0,
    "fat_g": 1.31,
    "fibre_g": 0.3,
    "folate_ug": 4.0,
    "iron_mg": 0.24,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 86.0,
    "protein_g": 2.39,
    "salt_g": 0.925,
    "sat_fat_g": 0.406,
    "sodium_mg": 370.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709160",
  "state": "Unspecified",
  "subcategory": "Ramen and Asian broth-based soups",
  "tags": [
    "ramen-and-asian-broth-based-soups",
    "soups",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
