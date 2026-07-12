/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-piece",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Baklava",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 37.6,
    "energy_kcal": 440.0,
    "fat_g": 29.3,
    "fibre_g": 2.5,
    "folate_ug": 36.0,
    "iron_mg": 1.98,
    "magnesium_mg": 38.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 116.0,
    "potassium_mg": 170.0,
    "protein_g": 6.58,
    "salt_g": 0.7775,
    "sat_fat_g": 10.9,
    "sodium_mg": 311.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 157.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708044",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
