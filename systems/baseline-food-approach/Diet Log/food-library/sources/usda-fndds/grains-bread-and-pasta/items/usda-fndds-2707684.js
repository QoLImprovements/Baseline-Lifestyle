/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-bagel-thin",
  "description": "Bagels and English muffins",
  "id": "usda-fndds-2707684",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-bagel-thin",
      "kind": "unit",
      "label": "1 Bagel Thin"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Bagel",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 52.4,
    "energy_kcal": 264.0,
    "fat_g": 1.32,
    "fibre_g": 1.6,
    "folate_ug": 106.0,
    "iron_mg": 3.57,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 107.0,
    "protein_g": 10.6,
    "salt_g": 1.055,
    "sat_fat_g": 0.36,
    "sodium_mg": 422.0,
    "sugar_g": 8.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707684",
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
