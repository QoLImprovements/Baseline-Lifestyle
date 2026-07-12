/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-submarine",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    }
  ],
  "name": "Sardine sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 306.0,
    "carbs_g": 21.9,
    "energy_kcal": 234.0,
    "fat_g": 7.96,
    "fibre_g": 1.0,
    "folate_ug": 55.0,
    "iron_mg": 3.12,
    "magnesium_mg": 34.0,
    "omega3_g": 0.547,
    "phosphorus_mg": 322.0,
    "potassium_mg": 273.0,
    "protein_g": 17.9,
    "salt_g": 0.9275,
    "sat_fat_g": 1.21,
    "sodium_mg": 371.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707033",
  "state": "Unspecified",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "seafood-sandwiches",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
