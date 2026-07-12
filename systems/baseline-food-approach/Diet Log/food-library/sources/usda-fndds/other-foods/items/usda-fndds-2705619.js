/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705619",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Chipotle dip, regular",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 3.15,
    "energy_kcal": 426.0,
    "fat_g": 45.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.12,
    "magnesium_mg": 6.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 61.0,
    "potassium_mg": 91.0,
    "protein_g": 1.99,
    "salt_g": 1.77,
    "sat_fat_g": 10.9,
    "sodium_mg": 708.0,
    "sugar_g": 2.04,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 1.79,
    "vitamin_k_ug": 80.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705619",
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
