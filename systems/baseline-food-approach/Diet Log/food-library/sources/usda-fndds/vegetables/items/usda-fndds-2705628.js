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
  "id": "usda-fndds-2705628",
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
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Vegetable dip, light",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 13.6,
    "energy_kcal": 198.0,
    "fat_g": 15.2,
    "fibre_g": 0.3,
    "folate_ug": 9.0,
    "iron_mg": 0.3,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 44.0,
    "potassium_mg": 138.0,
    "protein_g": 2.04,
    "salt_g": 1.505,
    "sat_fat_g": 4.64,
    "sodium_mg": 602.0,
    "sugar_g": 7.37,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 37.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705628",
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
