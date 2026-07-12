/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-with-ice",
  "description": "Other fruit juice",
  "id": "usda-fndds-2709333",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    }
  ],
  "name": "Watermelon juice, 100%",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 7.55,
    "energy_kcal": 30.0,
    "fat_g": 0.15,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 0.24,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 112.0,
    "protein_g": 0.61,
    "salt_g": 0.0025,
    "sat_fat_g": 0.016,
    "sodium_mg": 1.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709333",
  "state": "Unspecified",
  "subcategory": "Other fruit juice",
  "tags": [
    "beverages",
    "other-fruit-juice",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
