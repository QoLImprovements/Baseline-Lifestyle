/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Flavored milk, reduced fat",
  "id": "usda-fndds-2705473",
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
  "name": "Hot chocolate / cocoa, made with whole or reduced fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 16.5,
    "energy_kcal": 91.0,
    "fat_g": 1.54,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.0,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 95.0,
    "potassium_mg": 152.0,
    "protein_g": 2.73,
    "salt_g": 0.15,
    "sat_fat_g": 0.903,
    "sodium_mg": 60.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705473",
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
