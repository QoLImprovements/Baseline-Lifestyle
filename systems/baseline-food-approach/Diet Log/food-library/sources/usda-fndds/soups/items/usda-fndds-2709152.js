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
  "id": "usda-fndds-2709152",
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
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Soup, ramen noodles, water added",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 9.04,
    "energy_kcal": 66.0,
    "fat_g": 2.64,
    "fibre_g": 0.4,
    "folate_ug": 17.0,
    "iron_mg": 0.62,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 27.0,
    "protein_g": 1.53,
    "salt_g": 0.705,
    "sat_fat_g": 1.22,
    "sodium_mg": 282.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709152",
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
