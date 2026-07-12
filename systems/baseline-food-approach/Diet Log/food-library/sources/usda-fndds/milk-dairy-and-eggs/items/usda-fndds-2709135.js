/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable sandwiches/burgers",
  "id": "usda-fndds-2709135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
  "name": "Vegetable sandwich on wheat, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 18.4,
    "energy_kcal": 146.0,
    "fat_g": 5.24,
    "fibre_g": 2.4,
    "folate_ug": 35.0,
    "iron_mg": 1.53,
    "magnesium_mg": 27.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 132.0,
    "potassium_mg": 170.0,
    "protein_g": 6.46,
    "salt_g": 1.1075,
    "sat_fat_g": 2.25,
    "sodium_mg": 443.0,
    "sugar_g": 3.82,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 16.7,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 9.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709135",
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
