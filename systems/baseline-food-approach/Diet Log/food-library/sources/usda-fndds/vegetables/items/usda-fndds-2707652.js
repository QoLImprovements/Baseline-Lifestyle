/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-large-or-thick-slice",
  "description": "Vegetable sandwiches/burgers",
  "id": "usda-fndds-2707652",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bruschetta",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 21.3,
    "energy_kcal": 171.0,
    "fat_g": 7.61,
    "fibre_g": 1.5,
    "folate_ug": 45.0,
    "iron_mg": 1.58,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 52.0,
    "potassium_mg": 187.0,
    "protein_g": 4.29,
    "salt_g": 0.66,
    "sat_fat_g": 1.23,
    "sodium_mg": 264.0,
    "sugar_g": 3.34,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 1.76,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707652",
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
