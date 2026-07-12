/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171255",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "container-individual-5-fl-oz",
      "kind": "unit",
      "label": "container, individual (.5 fl oz)"
    },
    {
      "gramsPerUnit": 30.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Cream, fluid, half and half",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 4.3,
    "energy_kcal": 548.0,
    "fat_g": 11.5,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.05,
    "magnesium_mg": 10.0,
    "omega3_g": 0.049,
    "phosphorus_mg": 95.0,
    "potassium_mg": 132.0,
    "protein_g": 3.13,
    "salt_g": 0.1525,
    "sat_fat_g": 7.03,
    "sodium_mg": 61.0,
    "sugar_g": 4.13,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171255",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
