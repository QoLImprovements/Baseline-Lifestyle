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
  "id": "usda-fndds-2707699",
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
  "name": "Muffin, English, with raisins",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 47.7,
    "energy_kcal": 234.0,
    "fat_g": 1.55,
    "fibre_g": 3.6,
    "folate_ug": 85.0,
    "iron_mg": 3.78,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 172.0,
    "protein_g": 8.31,
    "salt_g": 0.9625,
    "sat_fat_g": 0.669,
    "sodium_mg": 385.0,
    "sugar_g": 9.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707699",
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
