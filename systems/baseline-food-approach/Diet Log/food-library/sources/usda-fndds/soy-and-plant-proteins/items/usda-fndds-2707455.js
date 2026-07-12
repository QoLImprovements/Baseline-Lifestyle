/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2707455",
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
  "name": "Soup, miso or tofu",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 2.3,
    "energy_kcal": 24.0,
    "fat_g": 0.85,
    "fibre_g": 0.6,
    "folate_ug": 12.0,
    "iron_mg": 0.47,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 77.0,
    "protein_g": 2.21,
    "salt_g": 1.1675,
    "sat_fat_g": 0.154,
    "sodium_mg": 467.0,
    "sugar_g": 0.77,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 22.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707455",
  "state": "Unspecified",
  "subcategory": "Ramen and Asian broth-based soups",
  "tags": [
    "ramen-and-asian-broth-based-soups",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
