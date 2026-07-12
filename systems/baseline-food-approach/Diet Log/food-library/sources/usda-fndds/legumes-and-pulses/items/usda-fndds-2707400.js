/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-individual-container",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2707400",
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
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Bean dip, made with refried beans",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 15.9,
    "energy_kcal": 119.0,
    "fat_g": 3.7,
    "fibre_g": 4.9,
    "folate_ug": 21.0,
    "iron_mg": 1.6,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 368.0,
    "protein_g": 5.44,
    "salt_g": 1.1075,
    "sat_fat_g": 0.529,
    "sodium_mg": 443.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707400",
  "state": "Fried",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "fried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
