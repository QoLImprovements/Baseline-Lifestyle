/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-tablespoon",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710197",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.3,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Blue or roquefort cheese dressing",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 4.77,
    "energy_kcal": 484.0,
    "fat_g": 51.1,
    "fibre_g": 0.4,
    "folate_ug": 5.0,
    "iron_mg": 0.09,
    "magnesium_mg": 8.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 74.0,
    "potassium_mg": 88.0,
    "protein_g": 1.37,
    "salt_g": 1.605,
    "sat_fat_g": 8.28,
    "sodium_mg": 642.0,
    "sugar_g": 3.48,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 4.28,
    "vitamin_k_ug": 85.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710197",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "milk-dairy-and-eggs",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
