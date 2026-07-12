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
  "id": "usda-fndds-2710209",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
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
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Creamy Italian dressing",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 11.2,
    "energy_kcal": 268.0,
    "fat_g": 24.6,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.27,
    "magnesium_mg": 5.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 41.0,
    "potassium_mg": 81.0,
    "protein_g": 0.55,
    "salt_g": 2.415,
    "sat_fat_g": 3.55,
    "sodium_mg": 966.0,
    "sugar_g": 9.86,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.19,
    "vitamin_k_ug": 67.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710209",
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
