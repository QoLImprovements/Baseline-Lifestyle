/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2709308",
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
  "name": "Guacamole with tomatoes",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.09,
    "energy_kcal": 145.0,
    "fat_g": 13.1,
    "fibre_g": 6.1,
    "folate_ug": 74.0,
    "iron_mg": 0.52,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 454.0,
    "protein_g": 1.87,
    "salt_g": 0.7925,
    "sat_fat_g": 1.9,
    "sodium_mg": 317.0,
    "sugar_g": 0.87,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 19.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709308",
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
