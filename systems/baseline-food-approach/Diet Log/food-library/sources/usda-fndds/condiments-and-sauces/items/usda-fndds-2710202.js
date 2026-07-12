/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-dipping-size-container",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710202",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 15.6,
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
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Honey mustard dressing",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 23.3,
    "energy_kcal": 464.0,
    "fat_g": 40.8,
    "fibre_g": 0.4,
    "folate_ug": 5.0,
    "iron_mg": 0.29,
    "magnesium_mg": 5.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 22.0,
    "potassium_mg": 20.0,
    "protein_g": 0.87,
    "salt_g": 1.28,
    "sat_fat_g": 5.0,
    "sodium_mg": 512.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 70.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710202",
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
