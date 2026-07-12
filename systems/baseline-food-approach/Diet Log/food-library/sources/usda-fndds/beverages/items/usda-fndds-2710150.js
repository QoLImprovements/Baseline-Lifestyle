/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2710150",
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
  "name": "Fruit and vegetable smoothie, bottled",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 12.5,
    "energy_kcal": 53.0,
    "fat_g": 0.26,
    "fibre_g": 0.7,
    "folate_ug": 15.0,
    "iron_mg": 0.42,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 165.0,
    "protein_g": 0.6,
    "salt_g": 0.015,
    "sat_fat_g": 0.053,
    "sodium_mg": 6.0,
    "sugar_g": 11.2,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 8.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 21.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710150",
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
