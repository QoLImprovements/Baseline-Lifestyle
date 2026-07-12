/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2705512",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Licuado or Batido",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 13.2,
    "energy_kcal": 75.0,
    "fat_g": 1.45,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.04,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 72.0,
    "potassium_mg": 179.0,
    "protein_g": 2.33,
    "salt_g": 0.0625,
    "sat_fat_g": 0.81,
    "sodium_mg": 25.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 10.7,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705512",
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
