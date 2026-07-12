/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz",
  "description": "Flavored milk, reduced fat",
  "id": "usda-fndds-2705487",
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
      "key": "1-packet-reconstituted",
      "kind": "unit",
      "label": "1 packet, reconstituted"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hot chocolate / cocoa, dry mix, made with water, with whipped cream",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 11.2,
    "energy_kcal": 65.0,
    "fat_g": 1.83,
    "fibre_g": 0.5,
    "folate_ug": 1.0,
    "iron_mg": 0.15,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 43.0,
    "potassium_mg": 96.0,
    "protein_g": 0.94,
    "salt_g": 0.1725,
    "sat_fat_g": 1.06,
    "sodium_mg": 69.0,
    "sugar_g": 8.81,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705487",
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
