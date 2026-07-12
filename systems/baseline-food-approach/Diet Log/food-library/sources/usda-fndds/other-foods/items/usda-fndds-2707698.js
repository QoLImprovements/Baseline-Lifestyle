/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-sandwich-size-muffin",
  "description": "Bagels and English muffins",
  "id": "usda-fndds-2707698",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-sandwich-size-muffin",
      "kind": "unit",
      "label": "1 sandwich size muffin"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-crumpet",
      "kind": "unit",
      "label": "1 crumpet"
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
  "name": "Muffin, English",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 44.2,
    "energy_kcal": 227.0,
    "fat_g": 1.69,
    "fibre_g": 3.5,
    "folate_ug": 94.0,
    "iron_mg": 4.0,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 109.0,
    "protein_g": 8.87,
    "salt_g": 1.0625,
    "sat_fat_g": 0.733,
    "sodium_mg": 425.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707698",
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
