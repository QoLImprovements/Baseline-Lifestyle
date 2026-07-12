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
  "id": "usda-fndds-2705627",
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
  "name": "Vegetable dip, regular",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 3.57,
    "energy_kcal": 429.0,
    "fat_g": 45.1,
    "fibre_g": 0.3,
    "folate_ug": 7.0,
    "iron_mg": 0.32,
    "magnesium_mg": 9.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 64.0,
    "potassium_mg": 112.0,
    "protein_g": 2.23,
    "salt_g": 1.7825,
    "sat_fat_g": 10.9,
    "sodium_mg": 713.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 93.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705627",
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
