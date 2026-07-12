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
  "id": "usda-sr-legacy-170889",
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
      "gramsPerUnit": 142.0,
      "key": "container-5-oz",
      "kind": "unit",
      "label": "container (5 oz)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "container-4-4-oz",
      "kind": "unit",
      "label": "container (4.4 oz)"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "container-6-oz",
      "kind": "unit",
      "label": "container (6 oz)"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "container-8-oz",
      "kind": "unit",
      "label": "container (8 oz)"
    }
  ],
  "name": "Yogurt, fruit, low fat,9 g protein/8 oz",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 18.6,
    "energy_kcal": 99.0,
    "fat_g": 1.15,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.06,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 177.0,
    "protein_g": 3.98,
    "salt_g": 0.1325,
    "sat_fat_g": 0.742,
    "sodium_mg": 53.0,
    "sugar_g": 18.6,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170889",
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
