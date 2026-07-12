/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-muffin",
  "description": "Bagels and English muffins",
  "id": "usda-fndds-2707787",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-muffin",
      "kind": "unit",
      "label": "1 muffin"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Muffin, English, multigrain",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 44.8,
    "energy_kcal": 223.0,
    "fat_g": 2.0,
    "fibre_g": 4.6,
    "folate_ug": 64.0,
    "iron_mg": 2.87,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 186.0,
    "protein_g": 8.7,
    "salt_g": 0.8825,
    "sat_fat_g": 0.287,
    "sodium_mg": 353.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707787",
  "state": "Unspecified",
  "subcategory": "Bagels and English muffins",
  "tags": [
    "bagels-and-english-muffins",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
