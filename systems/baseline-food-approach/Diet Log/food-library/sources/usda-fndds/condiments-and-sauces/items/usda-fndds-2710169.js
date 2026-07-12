/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-dipping-size-container",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2710169",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-dipping-size-container",
      "kind": "unit",
      "label": "1 dipping-size container"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Garlic sauce",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 2.87,
    "energy_kcal": 683.0,
    "fat_g": 74.0,
    "fibre_g": 0.3,
    "folate_ug": 5.0,
    "iron_mg": 0.22,
    "magnesium_mg": 4.0,
    "omega3_g": 0.059,
    "phosphorus_mg": 35.0,
    "potassium_mg": 61.0,
    "protein_g": 1.43,
    "salt_g": 1.1825,
    "sat_fat_g": 41.0,
    "sodium_mg": 473.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 682.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710169",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "condiments-and-sauces",
    "dips-gravies-other-sauces",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
