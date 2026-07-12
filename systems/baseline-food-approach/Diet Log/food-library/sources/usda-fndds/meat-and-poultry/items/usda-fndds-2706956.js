/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 205.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Roast beef sandwich on wheat, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 211.0,
    "carbs_g": 20.9,
    "energy_kcal": 217.0,
    "fat_g": 7.61,
    "fibre_g": 2.4,
    "folate_ug": 36.0,
    "iron_mg": 2.29,
    "magnesium_mg": 37.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 261.0,
    "potassium_mg": 370.0,
    "protein_g": 15.7,
    "salt_g": 1.74,
    "sat_fat_g": 3.36,
    "sodium_mg": 696.0,
    "sugar_g": 2.82,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706956",
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
