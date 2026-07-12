/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-regular",
  "description": "Vegetable sandwiches/burgers",
  "id": "usda-fndds-2709132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Vegetable sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 21.5,
    "energy_kcal": 120.0,
    "fat_g": 2.11,
    "fibre_g": 1.6,
    "folate_ug": 52.0,
    "iron_mg": 1.74,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 55.0,
    "potassium_mg": 146.0,
    "protein_g": 3.94,
    "salt_g": 0.935,
    "sat_fat_g": 0.468,
    "sodium_mg": 374.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 18.8,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709132",
  "state": "Unspecified",
  "subcategory": "Vegetable sandwiches/burgers",
  "tags": [
    "unspecified",
    "vegetable-sandwiches-burgers",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
