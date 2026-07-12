/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-4-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171300",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "container-4-oz",
      "kind": "unit",
      "label": "container (4 oz)"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "container-5-3-oz",
      "kind": "unit",
      "label": "container (5.3 oz)"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "container-8-oz",
      "kind": "unit",
      "label": "container (8 oz)"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "container-dannon-sprinkl-ins-4-1-oz",
      "kind": "unit",
      "label": "container, Dannon Sprinkl'ins (4.1 oz)"
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
    }
  ],
  "name": "Yogurt, Greek, strawberry, lowfat",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 12.3,
    "energy_kcal": 105.0,
    "fat_g": 2.57,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 0.07,
    "magnesium_mg": 10.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 109.0,
    "potassium_mg": 129.0,
    "protein_g": 8.17,
    "salt_g": 0.0825,
    "sat_fat_g": 1.6,
    "sodium_mg": 33.0,
    "sugar_g": 11.2,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171300",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
