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
  "id": "usda-fndds-2709158",
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
  "name": "Ramen bowl with meat and egg",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 14.0,
    "energy_kcal": 127.0,
    "fat_g": 4.57,
    "fibre_g": 0.9,
    "folate_ug": 46.0,
    "iron_mg": 0.98,
    "magnesium_mg": 14.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 79.0,
    "potassium_mg": 96.0,
    "protein_g": 7.13,
    "salt_g": 0.8325,
    "sat_fat_g": 1.06,
    "sodium_mg": 333.0,
    "sugar_g": 0.42,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709158",
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
