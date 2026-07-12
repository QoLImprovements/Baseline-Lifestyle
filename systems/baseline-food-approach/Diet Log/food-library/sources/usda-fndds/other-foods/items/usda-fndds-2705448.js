/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-individual-container",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705448",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
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
    }
  ],
  "name": "Tzatziki dip",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 4.1,
    "energy_kcal": 91.0,
    "fat_g": 6.0,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 0.03,
    "magnesium_mg": 10.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 81.0,
    "potassium_mg": 150.0,
    "protein_g": 5.22,
    "salt_g": 0.7675,
    "sat_fat_g": 1.89,
    "sodium_mg": 307.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705448",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
