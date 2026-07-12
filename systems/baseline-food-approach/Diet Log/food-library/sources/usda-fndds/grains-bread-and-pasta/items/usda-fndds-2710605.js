/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-fl-oz",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2710605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Atole de avena",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 15.5,
    "energy_kcal": 83.0,
    "fat_g": 1.58,
    "fibre_g": 0.2,
    "folate_ug": 1.0,
    "iron_mg": 0.1,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 53.0,
    "potassium_mg": 74.0,
    "protein_g": 1.74,
    "salt_g": 0.045,
    "sat_fat_g": 0.835,
    "sodium_mg": 18.0,
    "sugar_g": 14.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710605",
  "state": "Unspecified",
  "subcategory": "Smoothies and grain drinks",
  "tags": [
    "grains-bread-and-pasta",
    "smoothies-and-grain-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
