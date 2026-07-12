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
  "id": "usda-fndds-2705620",
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
  "name": "Chipotle dip, light",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 13.2,
    "energy_kcal": 195.0,
    "fat_g": 15.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.12,
    "magnesium_mg": 6.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 40.0,
    "potassium_mg": 118.0,
    "protein_g": 1.82,
    "salt_g": 1.495,
    "sat_fat_g": 4.63,
    "sodium_mg": 598.0,
    "sugar_g": 7.36,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 25.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705620",
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
