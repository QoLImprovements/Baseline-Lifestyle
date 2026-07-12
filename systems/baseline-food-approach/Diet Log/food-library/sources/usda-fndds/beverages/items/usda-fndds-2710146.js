/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2710146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 540.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 1080.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 864.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Fruit and vegetable smoothie, with dairy",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 12.7,
    "energy_kcal": 64.0,
    "fat_g": 0.72,
    "fibre_g": 1.0,
    "folate_ug": 32.0,
    "iron_mg": 0.22,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 295.0,
    "protein_g": 1.59,
    "salt_g": 0.065,
    "sat_fat_g": 0.301,
    "sodium_mg": 26.0,
    "sugar_g": 9.17,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 16.5,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 77.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710146",
  "state": "Unspecified",
  "subcategory": "Smoothies and grain drinks",
  "tags": [
    "beverages",
    "smoothies-and-grain-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
