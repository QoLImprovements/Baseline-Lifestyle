/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710199",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "gramsPerUnit": 14.7,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Caesar dressing",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 3.3,
    "energy_kcal": 542.0,
    "fat_g": 57.8,
    "fibre_g": 0.5,
    "folate_ug": 2.0,
    "iron_mg": 1.08,
    "magnesium_mg": 2.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 19.0,
    "potassium_mg": 29.0,
    "protein_g": 2.17,
    "salt_g": 3.025,
    "sat_fat_g": 8.79,
    "sodium_mg": 1210.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 4.74,
    "vitamin_k_ug": 105.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710199",
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
