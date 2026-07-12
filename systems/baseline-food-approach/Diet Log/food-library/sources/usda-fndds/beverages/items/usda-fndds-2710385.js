/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Coffee",
  "id": "usda-fndds-2710385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup-8-fl-oz",
      "kind": "unit",
      "label": "1 cup (8 fl oz)"
    }
  ],
  "name": "Coffee, cafe con leche, decaffeinated",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 5.7,
    "energy_kcal": 40.0,
    "fat_g": 1.15,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.06,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 132.0,
    "protein_g": 1.69,
    "salt_g": 0.065,
    "sat_fat_g": 0.658,
    "sodium_mg": 26.0,
    "sugar_g": 4.91,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710385",
  "state": "Unspecified",
  "subcategory": "Coffee",
  "tags": [
    "beverages",
    "coffee",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
