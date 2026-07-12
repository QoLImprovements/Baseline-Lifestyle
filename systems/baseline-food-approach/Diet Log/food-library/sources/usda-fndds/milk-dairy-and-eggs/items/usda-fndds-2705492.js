/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz",
  "description": "Flavored milk, nonfat",
  "id": "usda-fndds-2705492",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-packet-reconstituted",
      "kind": "unit",
      "label": "1 packet, reconstituted"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Hot chocolate / cocoa, dry mix, reduced sugar, made with lowfat (1%) or fat free (skim) milk",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 10.4,
    "energy_kcal": 62.0,
    "fat_g": 0.32,
    "fibre_g": 0.6,
    "folate_ug": 3.0,
    "iron_mg": 0.4,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 374.0,
    "protein_g": 4.41,
    "salt_g": 0.2725,
    "sat_fat_g": 0.19,
    "sodium_mg": 109.0,
    "sugar_g": 7.71,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705492",
  "state": "Unspecified",
  "subcategory": "Flavored milk, nonfat",
  "tags": [
    "flavored-milk-nonfat",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
