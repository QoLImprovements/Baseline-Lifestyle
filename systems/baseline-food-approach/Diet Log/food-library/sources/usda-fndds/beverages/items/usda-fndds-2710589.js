/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-no-ice",
  "description": "Fruit drinks",
  "id": "usda-fndds-2710589",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Grape juice drink, light",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 5.51,
    "energy_kcal": 23.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.03,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 17.0,
    "protein_g": 0.06,
    "salt_g": 0.0125,
    "sat_fat_g": 0.009,
    "sodium_mg": 5.0,
    "sugar_g": 4.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710589",
  "state": "Unspecified",
  "subcategory": "Fruit drinks",
  "tags": [
    "beverages",
    "fruit-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
