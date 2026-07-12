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
  "id": "usda-fndds-2710214",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.4,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Fruit dressing",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 12.4,
    "energy_kcal": 219.0,
    "fat_g": 18.0,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.02,
    "magnesium_mg": 9.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 74.0,
    "potassium_mg": 132.0,
    "protein_g": 2.51,
    "salt_g": 0.0775,
    "sat_fat_g": 10.3,
    "sodium_mg": 31.0,
    "sugar_g": 9.67,
    "vitamin_a_ug": 165.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710214",
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
