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
  "id": "usda-fndds-2710110",
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
  "name": "Soup, seaweed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.52,
    "energy_kcal": 37.0,
    "fat_g": 1.87,
    "fibre_g": 0.2,
    "folate_ug": 20.0,
    "iron_mg": 0.58,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 35.0,
    "potassium_mg": 83.0,
    "protein_g": 3.73,
    "salt_g": 0.81,
    "sat_fat_g": 0.704,
    "sodium_mg": 324.0,
    "sugar_g": 0.47,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710110",
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
