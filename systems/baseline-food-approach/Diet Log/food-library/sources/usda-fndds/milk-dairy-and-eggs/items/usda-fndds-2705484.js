/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-packet-reconstituted",
  "description": "Flavored milk, reduced fat",
  "id": "usda-fndds-2705484",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-packet-reconstituted",
      "kind": "unit",
      "label": "1 packet, reconstituted"
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
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Hot chocolate / cocoa, dry mix, made with whole or reduced fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 15.5,
    "energy_kcal": 97.0,
    "fat_g": 2.18,
    "fibre_g": 0.5,
    "folate_ug": 2.0,
    "iron_mg": 0.16,
    "magnesium_mg": 22.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 132.0,
    "potassium_mg": 233.0,
    "protein_g": 3.81,
    "salt_g": 0.255,
    "sat_fat_g": 1.28,
    "sodium_mg": 102.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705484",
  "state": "Unspecified",
  "subcategory": "Flavored milk, reduced fat",
  "tags": [
    "flavored-milk-reduced-fat",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
