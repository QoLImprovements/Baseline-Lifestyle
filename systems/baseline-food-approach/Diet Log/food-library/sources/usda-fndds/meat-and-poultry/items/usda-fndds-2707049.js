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
  "id": "usda-fndds-2707049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Salami sandwich on wheat, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 219.0,
    "carbs_g": 21.0,
    "energy_kcal": 325.0,
    "fat_g": 19.0,
    "fibre_g": 2.4,
    "folate_ug": 34.0,
    "iron_mg": 2.0,
    "magnesium_mg": 37.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 240.0,
    "potassium_mg": 254.0,
    "protein_g": 16.7,
    "salt_g": 2.65,
    "sat_fat_g": 7.49,
    "sodium_mg": 1060.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707049",
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
