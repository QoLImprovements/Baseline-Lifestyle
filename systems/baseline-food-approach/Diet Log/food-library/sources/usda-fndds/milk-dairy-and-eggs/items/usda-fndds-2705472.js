/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Flavored milk, lowfat",
  "id": "usda-fndds-2705472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Hot chocolate / cocoa, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 13.9,
    "energy_kcal": 72.0,
    "fat_g": 1.04,
    "fibre_g": 0.2,
    "folate_ug": 1.0,
    "iron_mg": 0.08,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 124.0,
    "protein_g": 1.82,
    "salt_g": 0.165,
    "sat_fat_g": 0.612,
    "sodium_mg": 66.0,
    "sugar_g": 12.0,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705472",
  "state": "Unspecified",
  "subcategory": "Flavored milk, lowfat",
  "tags": [
    "flavored-milk-lowfat",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
