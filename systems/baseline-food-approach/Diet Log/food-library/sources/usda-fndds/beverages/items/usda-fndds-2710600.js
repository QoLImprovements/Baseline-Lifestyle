/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz-nfs",
  "description": "Fruit drinks",
  "id": "usda-fndds-2710600",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 186.0,
      "key": "1-capri-sun-pouch",
      "kind": "unit",
      "label": "1 Capri Sun pouch"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "1-fun-size-box-4-23-fl-oz",
      "kind": "unit",
      "label": "1 fun size box (4.23 fl oz)"
    }
  ],
  "name": "Fruit juice drink (Capri Sun)",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 10.0,
    "energy_kcal": 39.0,
    "fat_g": 0.07,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.04,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 11.0,
    "protein_g": 0.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.008,
    "sodium_mg": 2.0,
    "sugar_g": 9.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710600",
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
