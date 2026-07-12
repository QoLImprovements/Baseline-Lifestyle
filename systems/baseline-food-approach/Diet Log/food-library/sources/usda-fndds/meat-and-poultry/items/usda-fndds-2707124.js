/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2707124",
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
  "name": "Soup, pho, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 5.6,
    "energy_kcal": 77.0,
    "fat_g": 3.33,
    "fibre_g": 0.4,
    "folate_ug": 6.0,
    "iron_mg": 0.58,
    "magnesium_mg": 7.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 49.0,
    "potassium_mg": 78.0,
    "protein_g": 5.81,
    "salt_g": 0.9125,
    "sat_fat_g": 1.28,
    "sodium_mg": 365.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707124",
  "state": "Unspecified",
  "subcategory": "Ramen and Asian broth-based soups",
  "tags": [
    "meat-and-poultry",
    "ramen-and-asian-broth-based-soups",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
