/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2709157",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Ramen bowl, vegetarian",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 15.6,
    "energy_kcal": 108.0,
    "fat_g": 3.33,
    "fibre_g": 1.1,
    "folate_ug": 48.0,
    "iron_mg": 0.9,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 64.0,
    "protein_g": 4.01,
    "salt_g": 0.86,
    "sat_fat_g": 0.476,
    "sodium_mg": 344.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 14.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709157",
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
