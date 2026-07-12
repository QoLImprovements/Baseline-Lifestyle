/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-small",
  "description": "Bagels and English muffins",
  "id": "usda-fndds-2707685",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-bagel-thin",
      "kind": "unit",
      "label": "1 Bagel Thin"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Bagel, with raisins",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 55.1,
    "energy_kcal": 268.0,
    "fat_g": 1.21,
    "fibre_g": 1.9,
    "folate_ug": 96.0,
    "iron_mg": 3.39,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 171.0,
    "protein_g": 9.83,
    "salt_g": 0.955,
    "sat_fat_g": 0.333,
    "sodium_mg": 382.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707685",
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
