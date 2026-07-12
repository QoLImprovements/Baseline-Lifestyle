/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2709154",
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
  "name": "Ramen bowl with beef",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 15.4,
    "energy_kcal": 137.0,
    "fat_g": 5.19,
    "fibre_g": 1.0,
    "folate_ug": 43.0,
    "iron_mg": 1.1,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 62.0,
    "potassium_mg": 92.0,
    "protein_g": 6.81,
    "salt_g": 0.8825,
    "sat_fat_g": 1.33,
    "sodium_mg": 353.0,
    "sugar_g": 0.44,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 14.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709154",
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
