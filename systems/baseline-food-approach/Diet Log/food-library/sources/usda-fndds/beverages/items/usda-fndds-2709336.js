/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-large",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2709336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1080.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 540.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
      "gramsPerUnit": 864.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Fruit smoothie, with whole fruit, non-dairy",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 11.6,
    "energy_kcal": 60.0,
    "fat_g": 1.06,
    "fibre_g": 1.1,
    "folate_ug": 9.0,
    "iron_mg": 0.52,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 104.0,
    "protein_g": 1.45,
    "salt_g": 0.0575,
    "sat_fat_g": 0.135,
    "sodium_mg": 23.0,
    "sugar_g": 5.17,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709336",
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
