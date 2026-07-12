/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710203",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 14.7,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    }
  ],
  "name": "Italian dressing, made with vinegar and oil",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 12.1,
    "energy_kcal": 240.0,
    "fat_g": 21.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.26,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 84.0,
    "protein_g": 0.41,
    "salt_g": 2.4825,
    "sat_fat_g": 2.95,
    "sodium_mg": 993.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.19,
    "vitamin_k_ug": 56.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710203",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "oils-and-fats",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
