/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-container-4-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170906",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "0-5-container-4-oz",
      "kind": "unit",
      "label": "0.5 container (4 oz)"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "container-8-oz",
      "kind": "unit",
      "label": "container (8 oz)"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Yogurt, vanilla, non-fat",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 17.0,
    "energy_kcal": 328.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 141.0,
    "protein_g": 2.94,
    "salt_g": 0.1175,
    "sat_fat_g": 0.0,
    "sodium_mg": 47.0,
    "sugar_g": 5.88,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170906",
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
