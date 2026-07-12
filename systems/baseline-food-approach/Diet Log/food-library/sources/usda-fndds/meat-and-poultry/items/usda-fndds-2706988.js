/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    }
  ],
  "name": "Chicken deli sandwich or sub, restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 24.3,
    "energy_kcal": 176.0,
    "fat_g": 2.66,
    "fibre_g": 1.1,
    "folate_ug": 55.0,
    "iron_mg": 1.76,
    "magnesium_mg": 26.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 191.0,
    "potassium_mg": 248.0,
    "protein_g": 13.7,
    "salt_g": 1.9075,
    "sat_fat_g": 0.683,
    "sodium_mg": 763.0,
    "sugar_g": 2.87,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706988",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
