/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-individual-container",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2710086",
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
  "name": "Honey mustard dip",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 25.2,
    "energy_kcal": 275.0,
    "fat_g": 18.0,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 0.61,
    "magnesium_mg": 13.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 47.0,
    "potassium_mg": 64.0,
    "protein_g": 1.77,
    "salt_g": 1.2725,
    "sat_fat_g": 2.62,
    "sodium_mg": 509.0,
    "sugar_g": 24.1,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 3.34,
    "vitamin_k_ug": 16.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710086",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
