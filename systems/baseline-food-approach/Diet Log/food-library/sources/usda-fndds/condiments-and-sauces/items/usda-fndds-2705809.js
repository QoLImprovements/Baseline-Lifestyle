/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705809",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Alfredo sauce",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 1.77,
    "energy_kcal": 150.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.02,
    "magnesium_mg": 4.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 50.0,
    "potassium_mg": 39.0,
    "protein_g": 2.12,
    "salt_g": 1.38,
    "sat_fat_g": 8.52,
    "sodium_mg": 552.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705809",
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
