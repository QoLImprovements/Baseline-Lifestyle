/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-miniature-slider",
  "description": "Vegetable sandwiches/burgers",
  "id": "usda-fndds-2709133",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    }
  ],
  "name": "Vegetable sandwich on white, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 186.0,
    "carbs_g": 19.6,
    "energy_kcal": 147.0,
    "fat_g": 5.11,
    "fibre_g": 1.4,
    "folate_ug": 47.0,
    "iron_mg": 1.59,
    "magnesium_mg": 17.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 115.0,
    "potassium_mg": 147.0,
    "protein_g": 5.82,
    "salt_g": 1.115,
    "sat_fat_g": 2.28,
    "sodium_mg": 446.0,
    "sugar_g": 3.86,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 16.6,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709133",
  "state": "Unspecified",
  "subcategory": "Vegetable sandwiches/burgers",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "vegetable-sandwiches-burgers"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
