/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2709743",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
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
  "name": "Salsa verde or salsa, green",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 6.36,
    "energy_kcal": 38.0,
    "fat_g": 0.89,
    "fibre_g": 1.9,
    "folate_ug": 8.0,
    "iron_mg": 0.65,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 259.0,
    "protein_g": 1.13,
    "salt_g": 2.265,
    "sat_fat_g": 0.0,
    "sodium_mg": 906.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 13.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709743",
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
