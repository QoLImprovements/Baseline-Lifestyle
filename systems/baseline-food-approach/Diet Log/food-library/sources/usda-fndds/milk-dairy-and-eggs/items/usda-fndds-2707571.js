/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz-no-ice",
  "description": "Plant-based milk",
  "id": "usda-fndds-2707571",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-no-ice",
      "kind": "unit",
      "label": "1 fl oz (no ice)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz-nfs",
      "kind": "unit",
      "label": "1 fl oz (NFS)"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-fl-oz-with-ice",
      "kind": "unit",
      "label": "1 fl oz (with ice)"
    }
  ],
  "name": "Coconut cream, canned, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 53.2,
    "energy_kcal": 357.0,
    "fat_g": 16.3,
    "fibre_g": 0.2,
    "folate_ug": 14.0,
    "iron_mg": 0.13,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 101.0,
    "protein_g": 1.17,
    "salt_g": 0.09,
    "sat_fat_g": 15.5,
    "sodium_mg": 36.0,
    "sugar_g": 51.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707571",
  "state": "Canned",
  "subcategory": "Plant-based milk",
  "tags": [
    "canned",
    "milk-dairy-and-eggs",
    "plant-based-milk"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
