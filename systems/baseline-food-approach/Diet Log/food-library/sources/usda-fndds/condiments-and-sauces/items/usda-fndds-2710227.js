/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-tablespoon",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710227",
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
      "gramsPerUnit": 31.0,
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
      "gramsPerUnit": 57.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Thousand Island dressing, light",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 24.1,
    "energy_kcal": 195.0,
    "fat_g": 11.3,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 202.0,
    "protein_g": 0.83,
    "salt_g": 2.3875,
    "sat_fat_g": 0.746,
    "sodium_mg": 955.0,
    "sugar_g": 17.3,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 27.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710227",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "condiments-and-sauces",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
