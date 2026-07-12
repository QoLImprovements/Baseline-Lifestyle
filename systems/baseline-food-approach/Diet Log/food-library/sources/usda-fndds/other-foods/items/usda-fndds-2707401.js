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
  "id": "usda-fndds-2707401",
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
    }
  ],
  "name": "Layer dip",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 6.67,
    "energy_kcal": 146.0,
    "fat_g": 11.3,
    "fibre_g": 2.1,
    "folate_ug": 20.0,
    "iron_mg": 1.05,
    "magnesium_mg": 19.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 114.0,
    "potassium_mg": 227.0,
    "protein_g": 5.41,
    "salt_g": 1.345,
    "sat_fat_g": 5.1,
    "sodium_mg": 538.0,
    "sugar_g": 1.71,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707401",
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
