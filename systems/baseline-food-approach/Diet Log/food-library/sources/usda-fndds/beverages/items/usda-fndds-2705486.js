/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup",
  "description": "Plant-based milk",
  "id": "usda-fndds-2705486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-packet-reconstituted",
      "kind": "unit",
      "label": "1 packet, reconstituted"
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
    }
  ],
  "name": "Hot chocolate / cocoa, dry mix , made with non-dairy milk",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 13.9,
    "energy_kcal": 81.0,
    "fat_g": 1.92,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.44,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 141.0,
    "protein_g": 1.88,
    "salt_g": 0.28,
    "sat_fat_g": 0.458,
    "sodium_mg": 112.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.82,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705486",
  "state": "Unspecified",
  "subcategory": "Plant-based milk",
  "tags": [
    "beverages",
    "plant-based-milk",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
