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
  "id": "usda-fndds-2705471",
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
      "key": "1-individual-school-container",
      "kind": "unit",
      "label": "1 individual school container"
    }
  ],
  "name": "Chocolate milk, reduced sugar, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 8.56,
    "energy_kcal": 65.0,
    "fat_g": 1.99,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 96.0,
    "potassium_mg": 160.0,
    "protein_g": 3.09,
    "salt_g": 0.115,
    "sat_fat_g": 1.09,
    "sodium_mg": 46.0,
    "sugar_g": 7.85,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705471",
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
