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
  "id": "usda-fndds-2705499",
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
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-individual-school-container",
      "kind": "unit",
      "label": "1 individual school container"
    }
  ],
  "name": "Strawberry milk, fat free (skim)",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 12.1,
    "energy_kcal": 61.0,
    "fat_g": 0.09,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.03,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 155.0,
    "protein_g": 3.18,
    "salt_g": 0.1025,
    "sat_fat_g": 0.045,
    "sodium_mg": 41.0,
    "sugar_g": 11.9,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705499",
  "state": "Raw",
  "subcategory": "Flavored milk, nonfat",
  "tags": [
    "flavored-milk-nonfat",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
