/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-individual-school-container",
  "description": "Flavored milk, lowfat",
  "id": "usda-fndds-2705470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-individual-school-container",
      "kind": "unit",
      "label": "1 individual school container"
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
    }
  ],
  "name": "Chocolate milk, low fat (1%)",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 10.2,
    "energy_kcal": 64.0,
    "fat_g": 1.11,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 0.23,
    "magnesium_mg": 13.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 96.0,
    "potassium_mg": 172.0,
    "protein_g": 3.46,
    "salt_g": 0.1625,
    "sat_fat_g": 0.616,
    "sodium_mg": 65.0,
    "sugar_g": 9.94,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705470",
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
