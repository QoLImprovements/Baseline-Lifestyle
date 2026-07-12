/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Flavored milk, lowfat",
  "id": "usda-fndds-2705466",
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
      "key": "1-individual-school-container",
      "kind": "unit",
      "label": "1 individual school container"
    }
  ],
  "name": "Chocolate milk, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 11.0,
    "energy_kcal": 65.0,
    "fat_g": 0.83,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 0.24,
    "magnesium_mg": 13.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 97.0,
    "potassium_mg": 174.0,
    "protein_g": 3.44,
    "salt_g": 0.17,
    "sat_fat_g": 0.462,
    "sodium_mg": 68.0,
    "sugar_g": 9.55,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705466",
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
