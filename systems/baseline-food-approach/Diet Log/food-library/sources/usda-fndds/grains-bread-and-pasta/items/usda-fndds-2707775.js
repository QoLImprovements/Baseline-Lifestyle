/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Bagels and English muffins",
  "id": "usda-fndds-2707775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-muffin",
      "kind": "unit",
      "label": "1 muffin"
    }
  ],
  "name": "Muffin, English, oat bran, with raisins",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 51.6,
    "energy_kcal": 272.0,
    "fat_g": 3.98,
    "fibre_g": 4.0,
    "folate_ug": 56.0,
    "iron_mg": 2.61,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 202.0,
    "protein_g": 7.89,
    "salt_g": 1.0125,
    "sat_fat_g": 0.642,
    "sodium_mg": 405.0,
    "sugar_g": 13.8,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707775",
  "state": "Unspecified",
  "subcategory": "Bagels and English muffins",
  "tags": [
    "bagels-and-english-muffins",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
