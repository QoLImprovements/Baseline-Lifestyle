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
  "id": "usda-fndds-2705625",
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
  "name": "Spinach dip, regular",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 3.44,
    "energy_kcal": 345.0,
    "fat_g": 35.8,
    "fibre_g": 0.3,
    "folate_ug": 14.0,
    "iron_mg": 0.23,
    "magnesium_mg": 12.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 66.0,
    "potassium_mg": 113.0,
    "protein_g": 2.35,
    "salt_g": 1.425,
    "sat_fat_g": 8.75,
    "sodium_mg": 570.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 104.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705625",
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
