/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-individual",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170857",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.1,
      "key": "container-individual",
      "kind": "unit",
      "label": "container, individual"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cream, fluid, light (coffee cream or table cream)",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 3.66,
    "energy_kcal": 195.0,
    "fat_g": 19.1,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.05,
    "magnesium_mg": 9.0,
    "omega3_g": 0.077,
    "phosphorus_mg": 92.0,
    "potassium_mg": 136.0,
    "protein_g": 2.96,
    "salt_g": 0.18,
    "sat_fat_g": 10.2,
    "sodium_mg": 72.0,
    "sugar_g": 3.67,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170857",
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
