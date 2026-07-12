/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173451",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
  "name": "Yogurt, fruit, lowfat, with low calorie sweetener",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 18.6,
    "energy_kcal": 105.0,
    "fat_g": 1.41,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.07,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 194.0,
    "protein_g": 4.86,
    "salt_g": 0.145,
    "sat_fat_g": 0.909,
    "sodium_mg": 58.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173451",
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
