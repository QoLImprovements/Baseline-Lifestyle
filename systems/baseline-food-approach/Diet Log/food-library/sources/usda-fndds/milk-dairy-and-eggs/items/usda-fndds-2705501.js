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
  "id": "usda-fndds-2705501",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Milk, malted",
  "nutritionPerBasis": {
    "calcium_mg": 159.0,
    "carbs_g": 8.64,
    "energy_kcal": 66.0,
    "fat_g": 2.05,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.71,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 98.0,
    "potassium_mg": 149.0,
    "protein_g": 3.19,
    "salt_g": 0.15,
    "sat_fat_g": 1.2,
    "sodium_mg": 60.0,
    "sugar_g": 7.81,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705501",
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
