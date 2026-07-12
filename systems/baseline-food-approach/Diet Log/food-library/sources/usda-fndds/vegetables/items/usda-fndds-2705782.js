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
  "id": "usda-fndds-2705782",
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
  "name": "Artichoke dip",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 5.78,
    "energy_kcal": 331.0,
    "fat_g": 32.7,
    "fibre_g": 0.9,
    "folate_ug": 18.0,
    "iron_mg": 0.21,
    "magnesium_mg": 13.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 97.0,
    "potassium_mg": 130.0,
    "protein_g": 3.86,
    "salt_g": 1.5175,
    "sat_fat_g": 8.46,
    "sodium_mg": 607.0,
    "sugar_g": 2.08,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 56.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705782",
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
