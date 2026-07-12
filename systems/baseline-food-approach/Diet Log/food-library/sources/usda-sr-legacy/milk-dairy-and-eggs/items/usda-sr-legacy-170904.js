/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bottle",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 971.0,
      "key": "bottle",
      "kind": "unit",
      "label": "bottle"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Kefir, lowfat, plain, LIFEWAY",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 4.77,
    "energy_kcal": 182.0,
    "fat_g": 1.02,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.04,
    "magnesium_mg": 12.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 105.0,
    "potassium_mg": 164.0,
    "protein_g": 3.79,
    "salt_g": 0.1,
    "sat_fat_g": 0.658,
    "sodium_mg": 40.0,
    "sugar_g": 4.61,
    "vitamin_a_ug": 171.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170904",
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
