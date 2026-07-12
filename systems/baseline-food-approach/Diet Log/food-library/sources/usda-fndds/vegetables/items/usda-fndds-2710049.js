/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-tablespoon",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2710049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Eggplant dip",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 8.15,
    "energy_kcal": 183.0,
    "fat_g": 15.0,
    "fibre_g": 3.9,
    "folate_ug": 39.0,
    "iron_mg": 1.69,
    "magnesium_mg": 83.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 264.0,
    "protein_g": 4.8,
    "salt_g": 0.5225,
    "sat_fat_g": 2.19,
    "sodium_mg": 209.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 7.1,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 24.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710049",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
