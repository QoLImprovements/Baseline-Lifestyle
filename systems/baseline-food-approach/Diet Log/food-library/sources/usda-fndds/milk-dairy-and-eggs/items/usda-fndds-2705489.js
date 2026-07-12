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
  "id": "usda-fndds-2705489",
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
  "name": "Hot chocolate / cocoa, dry mix, reduced sugar, made with whole or reduced fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 10.4,
    "energy_kcal": 77.0,
    "fat_g": 1.99,
    "fibre_g": 0.6,
    "folate_ug": 3.0,
    "iron_mg": 0.4,
    "magnesium_mg": 28.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 167.0,
    "potassium_mg": 367.0,
    "protein_g": 4.35,
    "salt_g": 0.2675,
    "sat_fat_g": 1.16,
    "sodium_mg": 107.0,
    "sugar_g": 7.56,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705489",
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
