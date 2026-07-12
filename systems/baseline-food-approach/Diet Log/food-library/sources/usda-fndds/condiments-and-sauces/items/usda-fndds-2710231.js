/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-packet",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710231",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-packet",
      "kind": "unit",
      "label": "1 packet"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Creamy Italian dressing, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 10.4,
    "energy_kcal": 56.0,
    "fat_g": 1.14,
    "fibre_g": 0.5,
    "folate_ug": 11.0,
    "iron_mg": 0.38,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 107.0,
    "protein_g": 1.03,
    "salt_g": 2.725,
    "sat_fat_g": 0.325,
    "sodium_mg": 1090.0,
    "sugar_g": 8.32,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710231",
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
